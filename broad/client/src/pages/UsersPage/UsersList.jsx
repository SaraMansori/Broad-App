import UserItem from './UserItem'


const UsersList = ({ getUsers, users }) => {

  const displayUsers = () => users.map(user => {
    return <UserItem key={user._id} user={user} getUsers={getUsers} />
  })

  return (
    // users.length > 0 &&
    <>
      {displayUsers(users)}
    </>
  );

}


export default UsersList;
