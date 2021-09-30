import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@material-ui/core';
//import Button from '@material-ui/core/Button';
import reading from '../reading.png';

import Button from 'react-bootstrap/Button';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: 'center',
  backgroundImage: `url(${reading})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} md={12}>
          <Item elevation={5}>
            <h1>Welcome to Broad - The Books' Road</h1>
            <Button>Prueba de Bootstrap</Button>
            <h3>
              The only place where your books can find their way to a new life! Create your library, swap, borrow, lend,
              find users around you, share your quotes, join reading challenges and much more...
            </h3>

            <h4>Are you ready to leave?</h4>
            <Button variant="contained" color="secondary">
              Hit the Road
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
