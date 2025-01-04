import CustomeTimelineItem from "../timeline/CustomeTimelineItem";
import CustomTimeline from "../timeline/CustomTimeline";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DownloadIcon from "@mui/icons-material/Download";
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
          {[...new Set(resumeData.socials.map((item) => item))].map((item) => (
            <CustomeTimelineItem
              key={item.title}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          ))}
        </CustomTimeline>
        <div className="btn-container">
          <CustomButton text={"DownLoad Cv"} icon={<DownloadIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
