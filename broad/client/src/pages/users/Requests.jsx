import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RequestsService from '../../services/users.service';

const requestsService = new RequestsService();


const Requests = props => {

  const id = props.loggedUser?._id

  const [requests, setRequests] = useState('')

  const clearState = () => {
    setRequests('')
  }

  /*
  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, description, profileImage, location } = formData;

    usersService
      .getSignupInfo(id, name, description, profileImage, location)
      .then(() => clearState())
      .catch(err => console.error(err));
  };


  return (
    <>
      <h3>Complete your data</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          type="text"
          autoFocus
          value={formData.name}
          onChange={handleInput}
        />
        <TextField
          // variant="outlined"
          // margin="normal"
          // required
          fullWidth
          id="description"
          // label="Email Address"
          // name="email"
          // autoComplete="email"
          //autoFocus
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={handleInput}
        />
        <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          id="location"
          label="Location"
          name="pwd"
          autoComplete="location"
          type="location"
          //autoFocus
          value={formData.pwd}
          onChange={handleInput}
        />
        <p>Profile image</p>
        <input
          type="file"
          id="profileImage"
          label="Profile image"
          name="profileImage"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => handleFile(e)}
        />

        <Button disabled={formData.isLoading} type="submit" fullWidth variant="contained" color="primary">
          Save Data
        </Button>
      </form>

      <Link href="#" variant="body2">
        Skip
      </Link>
    </>
  );
  */
}

export default Requests;
