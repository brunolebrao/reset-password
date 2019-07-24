import ResetPassword from './views/ResetPassword';
import React from 'react';
import { Grid } from 'semantic-ui-react'

function App() {
  return (
    <Grid columns={1} divided textAlign='center'>
      <Grid.Row>
        <Grid.Column>
          <ResetPassword/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
