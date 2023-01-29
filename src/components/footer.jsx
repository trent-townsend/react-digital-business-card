import "../components/footer.css";
import squareFacebook from "../assets/icons/square-facebook.svg";
import squareTwitter from "../assets/icons/twitter.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import githubIcon from "../assets/icons/square-github.svg";

export default function Footer() {
  return (
    <footer>

<a href="#">
    <img
    src={squareTwitter} 
    alt ="twitter link"
    className="social-icon"/>
    </a>

    <a href="#">
    <img
    src={squareFacebook} 
    alt ="facebook link"
    className="social-icon"/>
    </a>

    <a href="#">
    <img
    src={instagramIcon}
    alt="instagram link"
    className="social-icon" />
    </a>

    <a href="#">
    <img
    src={githubIcon} 
    alt ="github link"
    className="social-icon"/>
    </a>

    </footer>

  );
}
