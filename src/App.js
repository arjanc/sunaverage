import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import SunCalculator from './components/suncalculator/';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" gutterBottom>
              Calculate sunshine in your area
            </Typography>
          </Grid>
          <Grid container justify="center" spacing={16}>
            <Grid item>
              <SunCalculator />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ApolloProvider>
  );
}

export default App;
