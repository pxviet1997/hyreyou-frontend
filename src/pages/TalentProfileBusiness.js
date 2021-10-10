import { Helmet } from 'react-helmet';
import {
  Box, Button, CardHeader, CircularProgress, Container, Grid
} from '@material-ui/core';
import TalentProfileDetails from '../components/talentProfile/TalentProfileDetails';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { reqGetTalent } from 'src/api';
import { rejectTalent, shortlistTalent } from 'src/redux/actions/businessAction';

const TalentProfileBusiness = () => {
  const [user, setUser] = useState();
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const transfer = async () => {
    try {
      // console.log(user._id);
      dispatch(shortlistTalent({ roleId: user.roleId, talentId: user._id }));
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const reject = async () => {
    try {
      // console.log(user._id);
      dispatch(rejectTalent({ roleId: user.roleId, talentId: user._id }));
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Grid
            item
            py={2}
          // display="flex"
          // justify="center"
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
          // display="flex"
          // justify="center"
          // style={{
          //   padding: 16,
          //   display: 'flex',
          //   justifyContent: 'flex-end'
          // }}
          >
            <Button
              variant="outlined"
              style={{ color: 'green' }}
              onClick={transfer}
            >
              Shortlist
            </Button>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );

  useEffect(async () => {
    const response = await reqGetTalent(state.talentId);
    setUser({ ...response, roleId: state.roleId });
  }, []);

  useEffect(async () => {
    if (!user) return;
    console.log(user);
    setLoading(false);
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Talent Profile</title>
      </Helmet>
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
                  <TalentProfileDetails data={{ user, userType: 'Business' }} header={header} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
    </>
  );
};

export default TalentProfileBusiness;
