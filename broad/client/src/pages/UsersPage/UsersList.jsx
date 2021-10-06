import UserItem from './UserItem'
import { Row } from 'react-bootstrap'


const UsersList = ({ getUsers, users }) => {

  const displayUsers = () => users.map(user => {
    return <UserItem key={user._id} user={user} getUsers={getUsers} />
  })

  return (
    <Row>
      {displayUsers()}
    </Row>
  )

}


export default UsersList
