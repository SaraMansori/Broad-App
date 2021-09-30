import React, { useState, useEffect } from 'react';
import RequestsService from '../../services/requests.service';
import RequestsList from './RequestsList'

const requestsService = new RequestsService();


const RequestsPage = props => {

  const [requests, setRequests] = useState(null)

  const getRequests = () => {

    requestsService
      .getRequests()
      .then(res => setRequests(res.data.requests))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getRequests()
  }, [])

  return (
    <>
      <h1>My Requests</h1>
      {requests?.length ?
        <RequestsList getRequests={getRequests} requests={requests} />
        :
        <p>No pending requests.</p>
      }
    </>
  );

}


export default RequestsPage;
