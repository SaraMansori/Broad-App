import * as React from 'react';
import { ImageReading, Welcome, Ready, NewLife, Hit, Quote1, Quote2, Quote3, GreenRectangle, BookCover, BookDesc, PurpleRectangle, BroadDesc, Icon1, Icon2, Icon3, Icon4 } from '../components/styledComponents/styledPages/HomePageStyle';

const HomePage = () => {
  return (
    <>
      <ImageReading />
      <Welcome>welcome to <strong>CSS <br />the fucking locura</strong></Welcome>
      <NewLife>
        The only place where your <strong>books</strong> can find their way to a <strong>new life</strong> !
      </NewLife>
      <Ready>Ready to start your journey?</Ready>
      <Hit variant="secondary" style={{ color: 'white' }}>
        Hit the Road
      </Hit>
      <Quote1>Ya después de terminar el proyecto os quedará todo mucho más claro. <br /> (Teo y Guille)</Quote1>
      <Quote2>No veo la hora de terminar el bootcamp para aprender React por mi cuenta.<br />(Jesús)</Quote2>
      <Quote3>Oye, al menos he aprendido algo de CSS esta semana.<br />(Vanessa)</Quote3>
      <GreenRectangle>
        <BookCover />
        <BookDesc>
          <h2>Book of the week</h2>
          <h5>The Picture of Dorian Gray</h5>
          <br />
          <p><strong>Dorian Gray</strong> is the subject of a full-length portrait in oil by Basil Hallward, an artist impressed and infatuated by Dorian's beauty; he believes that Dorian's beauty is responsible for the new mood in his art as a painter. Through Basil, Dorian meets Lord Henry Wotton, and he soon is enthralled by the aristocrat's hedonistic world view: that beauty and sensual fulfilment are the only things worth pursuing in life.</p>
          <p>
            Newly understanding that his beauty will fade, Dorian expresses the desire to sell his soul, to ensure that the picture, rather than he, will age and fade. The wish is granted, and Dorian pursues a libertine life of varied amoral experiences while staying young and beautiful; all the while, his portrait ages and records every sin.</p>
        </BookDesc>

      </GreenRectangle>

      <PurpleRectangle>
        <BroadDesc>
          <Icon1><h2>&#128366;</h2></Icon1>
          <Icon2><h2>&#128472;</h2></Icon2>
          <Icon3><h2>&#128489;</h2></Icon3>
          <Icon4><h2>&#128505;</h2></Icon4>
          <h2>Create your library</h2>
          <h6>Recreate your library with your favorite titles, the ones you've read, the ones you're reading at the moment, and those you wish to read</h6>
          <br />
          <h2>Bookswapping!</h2>
          <h6>Exchange your books with other users, and give them a new life... Sharing is caring, and it's completely free!</h6>
          <br />
          <h2>Quotes</h2>
          <h6>Discover, create and share the best quotes of all times! Vote the ones you like, and save them in your collection.</h6>
          <br />
          <h2>Challenges</h2>
          <h6>Take your reading to the next level, and set your personal goals... Challenge accepted?</h6>
          <br />
          <h6 style={{ textAlign: 'center' }}>This and much more awaits for you on Broad!</h6>
        </BroadDesc>
      </PurpleRectangle>
    </>
  );
};

export default HomePage;
