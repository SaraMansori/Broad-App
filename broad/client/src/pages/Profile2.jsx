import React, { useState, useEffect } from 'react';
import UsersService from '../services/users.service';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ImgAvatar from '../components/ImgAvatar';

const usersService = new UsersService();

const Profile = ({ loggedUser }) => {
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

  console.log(loggedUser);

  useEffect(() => {
    usersService.getUserInfo(loggedUser?._id).then(response => {
      return response.data;
      // setUserInfo(???);
    });
  }, [loggedUser?._id]);

  return loggedUser ? (
    <Grid container mt={3}>
      <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ImgAvatar loggedUser={loggedUser} />
      </Grid>
      <Grid item xs={12} md={12} mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h3" component="div">
          {loggedUser.name || 'Name'}
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography gutterBottom variant="body2" component="div">
          {loggedUser.username}
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <h3>Loading...</h3>
  );
};

export default Profile;
