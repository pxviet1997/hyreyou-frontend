import { Helmet } from 'react-helmet';
import {
  Box, CircularProgress, Container, Grid
} from '@material-ui/core';
import TalentProfileDetail from '../components/talentProfile/TalentProfileDetails';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { reqGetTalent } from 'src/api';

const TalentProfileBusiness = () => {
  const [data, setData] = useState();
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await reqGetTalent(state);
    setData(response);
  }, []);

  useEffect(async () => {
    if (!data) return;
    console.log(data);
    setLoading(false);
  }, [data]);

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
                  <TalentProfileDetail data={data} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
    </>
  );
};

export default TalentProfileBusiness;
