import * as React from 'react'
import { H2, H6, ImageReading, Welcome, Ready, NewLife, Hit, Hit2, Quote1, Quote2, Quote3, RectContainer, GreenRectangle, BookCover, BookDesc, PurpleRectangle, BroadFeatures, BroadDesc, Icon } from '../../components/styledComponents/styledPages/HomePageStyle'
import { Link } from 'react-router-dom'
import { SIGNUP } from '../../utils/paths'


const HomePage = () => {

  return (
    <div style={{ marginTop: '-30px' }}>
      <ImageReading />
      <Welcome>welcome to <strong>Broad<br />the books' road</strong></Welcome>
      <NewLife>
        The only place where your <strong>books</strong> can find their way to a <strong>new life</strong> !
      </NewLife>
      <Ready>Ready to start your journey?</Ready>
      <Hit className='button-link' as={Link} to={SIGNUP} type="submit">
        Hit the Road
      </Hit>
      <Quote1>“Nothing of me is original. I am the combined effort of everyone I've ever known.” (Chuck Palahniuk)</Quote1>
      <Quote3>“Read, read, read. Read everything - trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master...”<br />(William Faulkner)</Quote3>
      <Quote2>"Leap and the net will appear."<br />(John Burroughs)</Quote2>
      <RectContainer>
        <GreenRectangle>

          <BookCover />

          <BookDesc>
            <H2 style={{ textAlign: 'center' }}>Book of the week</H2>
            <H6 style={{ textAlign: 'center' }}>The Picture of Dorian Gray</H6>
            <br />
            <p><strong>Dorian Gray</strong> is the subject of a full-length portrait in oil by Basil Hallward, an artist impressed and infatuated by Dorian's beauty; he believes that Dorian's beauty is responsible for the new mood in his art as a painter.</p>
            <p>
              Through Basil, Dorian meets Lord Henry Wotton, and he soon is enthralled by the aristocrat's hedonistic world view: that beauty and sensual fulfilment are the only things worth pursuing in life.</p>

          </BookDesc>

        </GreenRectangle>

        <PurpleRectangle>
          <BroadFeatures>
            <Icon><H2>&#128366;</H2></Icon>
            <BroadDesc>
              <H2>Create your library</H2>
              <H6>Recreate your library with your favorite titles, the ones you've read, the ones you're reading at the moment, and those you wish to read</H6>
            </BroadDesc>
          </BroadFeatures>
          <br />
          <BroadFeatures>
            <Icon><H2>&#128472;</H2></Icon>
            <BroadDesc>
              <H2>Bookswapping!</H2>
              <H6>Exchange your books with other users, and give them a new life... Sharing is caring, and it's completely free!</H6>
            </BroadDesc>
          </BroadFeatures>
          <br />
          <BroadFeatures>
            <Icon><H2>&#128489;</H2></Icon>
            <BroadDesc>
              <H2>Quotes</H2>
              <H6>Discover, create and share the best quotes of all times! Vote the ones you like, and save them in your collection.</H6>
            </BroadDesc>
          </BroadFeatures>
          <br />
          <BroadFeatures>
            <Icon><H2>&#128505;</H2></Icon>
            <BroadDesc>
              <H2>Challenges</H2>
              <H6>Take your reading to the next level, and set your personal goals... Challenge accepted?</H6>
            </BroadDesc>
          </BroadFeatures>
          <br />

          <H6 style={{ textAlign: 'center' }}>This and much more awaits for you on Broad!</H6>
          <br />
          <p style={{ textAlign: 'center' }}>
            <Hit2 className='button-link' as={Link} to={SIGNUP} type="submit">
              Hit the Road
            </Hit2>
          </p>

        </PurpleRectangle>
      </RectContainer>
    </div>
  )

}


export default HomePage
