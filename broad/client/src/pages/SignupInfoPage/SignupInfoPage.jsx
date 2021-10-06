import { useState } from 'react'
import { Button } from 'react-bootstrap'
import TextField from '@mui/material/TextField' // cambiar por bootstrap
import { Link } from 'react-router-dom'
import UsersService from '../../services/users.service'
import UploadsService from '../../services/uploads.service'

const usersService = new UsersService()
const uploadsService = new UploadsService()


const SignupInfoPage = props => {

  const [formData, setFormData] = useState({ name: '', description: '', profileImage: '', location: '' })

  const clearState = () => {
    setFormData({ name: '', description: '', profileImage: '', location: '' })
  }


  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  const handleSubmit = e => {
    e.preventDefault()

    const { name, description, profileImage, location } = formData;

    usersService
      .updateSignupInfo(name, description, profileImage, location)
      .then(() => clearState())
      .catch(err => console.error(err))
  }


  const handleFile = e => {

    setFormData({ ...formData, isLoading: true })

    const uploadedData = new FormData()
    uploadedData.append('imageData', e.target.files[0])

    uploadsService
      .uploadImg(uploadedData)
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
          name="description"
          // autoComplete="email"
          //autoFocus
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleInput}
        />
        <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          id="location"
          label="Location"
          name="location"
          autoComplete="location"
          type="location"
          //autoFocus
          value={formData.location}
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
  )

}


export default SignupInfoPage
