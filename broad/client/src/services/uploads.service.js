import axios from 'axios'


class UploadsService {

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/uploads`,
      withCredentials: true
    })
  }

  uploadImg = (imageForm) => this.instance.post("/image", imageForm)

}


export default UploadsService
