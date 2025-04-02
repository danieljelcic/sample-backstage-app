import React from 'react';
import { makeStyles, Theme, Grid, Paper } from '@material-ui/core';

import {
  Content,
  Header,
  Page,
} from '@backstage/core-components';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Page themeId="home">
      <Header title="Home" />
      <Content>
        <Grid container direction="row">
          <Grid item xs={3}>
            <Paper className={classes.card}>
              This is an item on the home page
            </Paper>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
