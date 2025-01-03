import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default {
  name: "Joey Sanchez",
  title: "Software Engineer",
  email: "orewagenki3@gmail.com",
  socials: {
    Github: {
      link: "https://github.com/Orewagenki",
      text: "MyGitHub",
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJ0%2BX6rgCRZWEJrxaVICvLg%3D%3D",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
  },
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  experiences: [
    {
      title: "Software Engineer - Northrop Grumman Corporation",
      date: "September 2021 - Present",
      descrition:
        "Using engineering best practices and standards while participating in the full life cycle of software and systems development using C++. This includes requirements development, modeling and design, application development, unit testing, integration while maintaining excellent verbal and written skills.",
    },
    {
      title: "Software Developer - Weber State University",
      date: "October 2020 - June 2021",
      descrition:
        "Programming in C# (ASP.NET), working with SQL database design, and improving the User Experience via client-side JavaScript API programming, as well as visual UX design and layout (Advanced CSS3, Bootstrap 4).",
    },
  ],
  education: [
    {
      title: "Bachelor of Science, Computer Science",
      date: "April 2021",
    },
    {
      title: "Associates of Japanese Language",
      date: "December 2019",
    },
  ],
};
