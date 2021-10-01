import * as React from 'react';
import { ImageReading, Welcome, Ready, NewLife, Hit } from '../components/styledComponents/HomePageStyle';

const HomePage = () => {
  return (
    <>
      <ImageReading />
      <Welcome>welcome to <strong>Broad the books' road</strong></Welcome>
      <NewLife>
        The only place where your <strong>books</strong> can find their way to a <strong>new life</strong> !
      </NewLife>
      <Ready>Ready to start your journey?</Ready>
      <Hit variant="secondary" style={{ color: 'white' }}>
        Hit the Road
      </Hit>

    </>
  );
};

export default HomePage;
