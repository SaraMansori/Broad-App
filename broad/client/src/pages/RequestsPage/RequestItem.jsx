import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import RequestsService from '../../services/requests.service';

const requestsService = new RequestsService();


const RequestsItem = ({ _id, owner, getRequests }) => {

  const changeRequestStatus = e => {

    e.preventDefault();

    const status = e.target.dataset.status

    requestsService
      .manageRequest(_id, status)
      .then(() => getRequests())
      .catch(err => console.error(err));
  };

  return (
    <>
      <Link to={`/users/${_id}`}>{owner.username}</Link>
      <Button onClick={changeRequestStatus} data-status="ACCEPTED" variant="primary">Accept</Button>
      <Button onClick={changeRequestStatus} data-status="REJECTED" variant="primary">Reject</Button>
      <br />
      <br />
    </>
  );

}


export default RequestsItem;
