/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Dropdown.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faShip } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown() {
    return (
        <nav class="topnav" id="myTopnav">
            <a className="active">
                <FontAwesomeIcon icon={faShip} />
            </a>
            <a>New Game</a>
            <a>Surrender</a>
            <a>Invite Opponent</a>
            <a className="icon" onClick={expandHamburgerIcon}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </nav>
    );
}

function expandHamburgerIcon() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }