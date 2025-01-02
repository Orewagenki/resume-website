import CustomeTimelineItem from "../timeline/CustomeTimelineItem";
import CustomTimeline from "../timeline/CustomTimeline";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import profileImage from "../../assets/images/profile.webp";
import resumeData from "../../utils/resumeData";

import "./profile.css";
import CustomButton from "../button/CustomButton";

const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={profileImage} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomeTimelineItem title="Name" text={resumeData.name} link={""} />
          <CustomeTimelineItem
            title="Title"
            text={resumeData.title}
            link={""}
          />
          <CustomeTimelineItem
            title="Email"
            text={resumeData.email}
            link={""}
          />
          {Object.keys(resumeData.socials).map((item) => (
            <CustomeTimelineItem
              key={resumeData.socials[item].text}
              title={item}
              text={resumeData.socials[item].text}
              link={resumeData.socials[item].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <CustomButton text={"MyButton"} />
      </div>
    </div>
  );
};

export default Profile;
