import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton
} from '@material-ui/core';
import NavItem from 'src/components/NavItem';
import { useParams } from 'react-router';

const ShortListCandidates = () => {
  const { id: roleId } = useParams();

  return (
    <>
      <Helmet>
        <title>{`Short List - Role ${roleId}`}</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              <Card>
                <CardHeader
                  title={`Short List - Role ${roleId}`}
                  subheader="Short Lists Candidates"
                />
                <Divider />
                <CardContent>
                  <List
                    component="nav"
                    sx={{
                      width: '100%',
                      bgcolor: 'background.paper'
                    }}
                  >
                    {[1, 2, 3].map((value) => (
                      <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                          <ListItemText primary={`test@test${value}.com`} />
                        }
                      >
                        <ListItemText primary={`CANDIDATE ${value}`} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ShortListCandidates;
