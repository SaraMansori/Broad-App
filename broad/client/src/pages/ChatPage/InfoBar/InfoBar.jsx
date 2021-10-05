import { LeftInnerContainer, RightInnerContainer } from '../../../components/styledComponents/ChatStyle'
import onlineIcon from '../../../components/icons/online-icon.png'
import './InfoBar.css'


const InfoBar = ({ otherUser, handleClick }) => {
  return (
    <div className="infoBar">
      <LeftInnerContainer>
        <img src={onlineIcon} alt="green light online" className="onlineIcon" />
        <h3>{otherUser.username}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <svg onClick={() => handleClick()} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </RightInnerContainer>
    </div>
  );
}

export default InfoBar;