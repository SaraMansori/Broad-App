import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RequestsService from '../../services/requests.service';

const requestsService = new RequestsService();


const RequestsItem = ({ _id, owner, getRequests }) => {

  const changeRequestStatus = e => {

    e.preventDefault();
    const btnText = e.target.innerText // se puede mejorar?

    const status = {
      //si quitamos material UI posiblemente no funcione por las mayúsculas
      "ACCEPT": 'ACCEPTED',
      "REJECT": 'REJECTED'
    }

    requestsService
      .manageRequest(_id, status[btnText])
      .then(() => getRequests())
      .catch(err => console.error(err));
  };

  return (
    <>
      <Link to={`/users/${_id}`}>{owner.username}</Link>
      <Button onClick={changeRequestStatus} type="submit" variant="contained" color="primary">Accept</Button>
      <Button onClick={changeRequestStatus} type="submit" variant="contained" color="primary">Reject</Button>
      <br />
      <br />
    </>
  );

}


export default RequestsItem;
