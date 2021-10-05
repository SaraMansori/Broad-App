import UserItem from './UserItem'
import { Row } from 'react-bootstrap'


const UsersList = ({ getUsers, users }) => {

  const displayUsers = () => users.map(user => {
    return <UserItem key={user._id} user={user} getUsers={getUsers} />
  })

  return (
    // users.length > 0 &&
    <Row>
      {displayUsers(users)}
    </Row>
  );

}


export default UsersList;
