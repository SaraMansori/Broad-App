import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 5px 5px 12px 5px #8c8c8c;
`;

const ImgAvatar = ({ loggedUser }) => {
  return (
    <>
      <Img loggedUser={loggedUser} src={loggedUser.profileImage} alt={loggedUser.name} />
    </>
  );
};

export default ImgAvatar;
