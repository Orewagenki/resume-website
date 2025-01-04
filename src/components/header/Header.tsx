import "bootstrap/dist/css/bootstrap.min.css";
import { HomeRounded, Telegram } from "@mui/icons-material";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import resumeData from "../../utils/resumeData";
import CustomButton from "../button/CustomButton";
import "./Header.css";

interface Props {
  pathName?: string;
}

const Header = ({ pathName }: Props) => {
  return (
    <Navbar expand="md" sticky="top" className="header">
      <Navbar.Brand href="/" className="header_home">
        <HomeRounded />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            href="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            href="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {[...new Set(resumeData.socials.map((item) => item))].map((item) => (
            <a key={item.text} href={item.link} target="_blank">
              {item.icon}
            </a>
          ))}

          <CustomButton text="Hire me" icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
