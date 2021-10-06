import { Redirect } from 'react-router'


const ProtectedRoutes = ({ condition, urlRedirect, children }) => {

  return condition ? [children] : <Redirect to={urlRedirect} />

}


export default ProtectedRoutes
