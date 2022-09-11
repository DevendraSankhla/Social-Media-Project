import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Devocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for a friend, post or any video." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <Person/>
            <span className="topbarIconsBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <Chat/>
            <span className="topbarIconsBadge">2</span>
          </div>
          <div className="topbarIconsItem">
            <Notifications/>
            <span className="topbarIconsBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default App;