import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UsersService from '../../services/users.service';
import UploadsService from '../../services/uploads.service';
import { SIGNUP } from '../../utils/paths';

const usersService = new UsersService();
const uploadsService = new UploadsService();


const SignupInfo = props => {

  const id = props.loggedUser?._id

  const [formData, setFormData] = useState({ name: '', description: '', profileImage: '', location: '', profileImage: '' })

  const clearState = () => {
    setFormData({ name: '', description: '', profileImage: '', location: '', profileImage: '' })
  }
  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, description, profileImage, location } = formData;

    usersService
      .login(name, description, profileImage, location)
      .then(() => clearState())
      .catch(err => console.error(err));
  };

  const handleFile = e => {

    setFormData({ ...formData, isLoading: true })

    const uploadedData = new FormData()
    uploadedData.append('imageData', e.target.files[0])

    uploadsService.uploadImg(uploadedData)
      .then(res => setFormData({ ...formData, isLoading: false, profileImage: res.data.cloudinary_url }))
      .catch(err => console.error(err)) // Gestionar error de cara al usuario
  }

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

        <Button type="submit" fullWidth variant="contained" color="primary">
          Save Data
        </Button>
      </form>

      <Link href="#" variant="body2">
        Skip
      </Link>
    </>
  );
}

export default SignupInfo;
