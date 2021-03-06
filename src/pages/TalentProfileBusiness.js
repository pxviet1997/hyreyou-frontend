import { Helmet } from 'react-helmet';
import {
  Box, Button, CardHeader, CircularProgress, Container, Grid
} from '@material-ui/core';
import TalentProfileDetails from '../components/talentProfile/TalentProfileDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { reqGetTalent } from 'src/api';
import { rejectTalent, shortlistTalent } from 'src/redux/actions/businessAction';
import SendOfferModal from 'src/components/shortListManagement/model/SendOfferModal';

const TalentProfileBusiness = () => {
  const [talent, setTalent] = useState();
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((reduxState) => reduxState.shared);

  const shortList = async () => {
    try {
      dispatch(shortlistTalent({ roleId: talent.roleId, talentId: talent._id, _id: user._id }));
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const reject = async () => {
    try {
      dispatch(rejectTalent({ roleId: talent.roleId, talentId: talent._id, _id: user._id }));
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const sendOffer = () => {
    console.log('Offer sent!');
    setOpen(true);
  };

  useEffect(async () => {
    const response = await reqGetTalent(state.talentId);
    setTalent({ ...response, roleId: state.roleId });
  }, []);

  useEffect(async () => {
    if (!talent) return;
    // console.log(user);
    setLoading(false);
  }, [talent]);

  const header = (
    <Box px={4}>
      <Grid container>
        <Grid container item lg={6} md={6} xs={6} direction="row" justifyContent="flex-start">
          <Grid item py={2} pl={2} display="flex" justify="center">
            <Button variant="contained" onClick={() => navigate(-1)} color="primary">
              Back
            </Button>
          </Grid>
          <Grid item display="flex" justify="center">
            <CardHeader title="Talent Profile" />
          </Grid>
        </Grid>
        <Grid container item lg={6} md={6} xs={6} direction="row" justifyContent="flex-end">
          {state.type === 'talentIds'
            ? (
              <>
                <Grid
                  item
                  py={2}
                >
                  <Button
                    variant="outlined"
                    style={{ color: 'red' }}
                    onClick={reject}
                  >
                    Reject
                  </Button>
                </Grid>
                <Grid
                  item
                  py={2}
                  mr={4}
                  ml={2}
                >
                  <Button
                    variant="outlined"
                    style={{ color: 'green' }}
                    onClick={shortList}
                  >
                    Shortlist
                  </Button>
                </Grid>
              </>)
            : (
              <Grid
                item
                py={2}
                mr={4}
                ml={2}
              >
                <Button
                  variant="outlined"
                  style={{ color: 'green' }}
                  onClick={sendOffer}
                >
                  Send Offer
                </Button>
              </Grid>
            )}
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>Talent Profile</title>
      </Helmet>
      <SendOfferModal open={open} setOpen={setOpen} />
      {loading
        ? (
          <Box
            sx={{
              minHeight: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )
        : (
          <Box
            sx={{
              backgroundColor: 'background.default',
              minHeight: '100%',
              py: 3,
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12}>
                  <TalentProfileDetails data={{ user: talent, userType: 'Business' }} header={header} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
    </>
  );
};

export default TalentProfileBusiness;
