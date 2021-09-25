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

const ShortList = (props) => {
  function handleNavigate() {
    props.push('/app');
  }

  return (
    <>
      <Helmet>
        <title>Short List</title>
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
                  title="Short List"
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
                    {[1, 2, 3, 4, 5].map((value) => (
                      <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                          // eslint-disable-next-line react/jsx-wrap-multilines
                          <NavItem
                            href={`/app/short-list/${value}`}
                            title={`${value} CANDIDATES`}
                          />
                        }
                      >
                        <ListItemText primary={`ROLE ${value}`} />
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

export default ShortList;
