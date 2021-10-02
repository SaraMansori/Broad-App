import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../UserContext'
import UsersService from '../services/users.service';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const usersService = new UsersService();

const Profile = () => {

  const loggedUser = useContext(UserContext)

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    description: '',
    profileImage: '',
    name: '',
    locationInfo: {},
    favoriteGenres: [],
    books: [],
    friends: [],
  });

  //console.log(loggedUser);

  useEffect(() => {
    usersService.getUserInfo(loggedUser?._id).then(response => {
      return response.data;
      // setUserInfo(???);
    });
  }, [loggedUser?._id]);

  return loggedUser ? (
    <Grid container mt={2}>
      <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={loggedUser.name || 'Name'}
            height="300"
            image={loggedUser.profileImage || 'https://pgimgmt.com/wp-content/uploads/2018/05/generic-user-300x256.jpg'}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {loggedUser.name || 'Name'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {loggedUser.description ||
                'This user did not have time to create a description, nevertheless, we think he/she is a cool guy!'}
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}>
              Country: {loggedUser.locationInfo || 'The world'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Friends</Button>
            <Button size="small">Books</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <h3>Loading...</h3>
  );
};

export default Profile;
