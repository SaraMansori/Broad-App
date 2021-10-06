import styled from 'styled-components'


const Header = styled.div`
  color: #FFFFFF;
  text-align: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  background-size: cover; 
  height: 20vh; 
  background-image: url(https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)
`

const ProfilePicture = styled.div`
  height: 200px; 
  width: 200px; 
  border-radius: 50%; 
  border: 3px solid white;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  z-index: 1;
  display: flex;
  justify-content: center;
`

export { Header, ProfilePicture }
