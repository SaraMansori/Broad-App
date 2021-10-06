import { useState } from 'react'
import { InputGroup, Button, Form, FormControl, Container, Row, Col } from 'react-bootstrap/'
import { Link, useHistory } from 'react-router-dom'
import UsersService from '../../services/users.service'
import UploadsService from '../../services/uploads.service'

const usersService = new UsersService()
const uploadsService = new UploadsService()


const SignupInfoPage = props => {

  let history = useHistory()

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
      .then(() => {
        history.push('/profile')
        clearState()
      })
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
    <Container className='d-flex justify-content-center flex-column align-items-center'>
      <Row className='d-flex justify-content-center'>
        <Col>
          <h3>Last step! Now complete your data ✨</h3>
          <Form onSubmit={handleSubmit}>
            <InputGroup style={{ display: 'inline-block' }}>

              <FormControl
                style={{ width: '100%', margin: '15px 0px' }}
                placeholder="Name..."
                aria-label="name"
                aria-describedby="name"
                name="name"
                type="text"
                autoFocus
                value={formData.name}
                onChange={handleInput}
              />
              <Form.Control
                style={{ width: '100%', margin: '15px 0px' }}
                placeholder="Description..."
                aria-label="description"
                aria-describedby="description"
                name="description"
                type="text"
                as="textarea"
                rows={6}
                value={formData.description}
                onChange={handleInput}
              />
              <FormControl
                style={{ width: '100%', margin: '15px 0px' }}
                placeholder="Location..."
                aria-label="location"
                aria-describedby="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleInput}
              />
              <p>Profile image</p>
              <div className='d-flex flex-column'>
                <input
                  style={{ maxWidth: '60vw' }}
                  type="file"
                  id="profileImage"
                  aria-label="Profile image"
                  name="profileImage"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => handleFile(e)}
                />

                <Button size='sm' style={{ marginTop: '15px' }} disabled={formData.isLoading} type="submit" variant="primary">
                  Save Data
                </Button>
              </div>
            </InputGroup>
          </Form>

        </Col>
      </Row>
      <Link to="/profile" className='plain-link' style={{ margin: '15px 0px' }} type="submit" variant="primary">
        Skip
      </Link>
    </Container>
  )

}


export default SignupInfoPage
