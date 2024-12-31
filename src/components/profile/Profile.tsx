import { Typography } from "@mui/material";
import "./profile.css";
import profileImage from "../../assets/images/profile.webp";
import Timeline from "../timeline/Timeline";

const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <Typography className="name">Joey</Typography>
        <Typography className="title">Software Engineer</Typography>
      </div>
      <figure className="profile_image">
        <img src={profileImage} alt="" />
      </figure>
      <div className="profile_information">
        <Timeline />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default Profile;
