import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import gameImage from "../assets/images/gameDiscovery.png";
import WebIcon from "@mui/icons-material/Web";

export default {
  name: "Joey Sanchez",
  title: "Software Engineer",
  email: "orewagenki3@gmail.com",
  socials: [
    {
      title: "GitHub",
      link: "https://github.com/Orewagenki",
      text: "MyGitHub",
      icon: <GitHubIcon />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJ0%2BX6rgCRZWEJrxaVICvLg%3D%3D",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
  ],
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
  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJs",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
        "Chakra UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["C++", "C#", "Python"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "Github", "SCRUM/Agile"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: gameImage,
      title: "video game discovery app",
      description:
        "This is a video game search application I created using React and Typescript",
      links: [
        {
          link: "https://github.com/Orewagenki/video-game-discovery-app",
          icon: <GitHubIcon />,
        },
        {
          link: "https://video-game-discovery-app-five.vercel.app/",
          icon: <WebIcon />,
        },
      ],
    },
    {
      tag: "React",
      image: gameImage,
      title: "Work Resume",
      description:
        "This is a my work resume I created using React and Typescript",
      links: [
        {
          link: "https://github.com/Orewagenki/resume-website",
          icon: <GitHubIcon />,
        },
        {
          link: "",
          icon: <WebIcon />,
        },
      ],
    },
    {
      tag: "Unity",
      image: gameImage,
      title: "Angry Bird clone",
      description: "This is an Angry Bird clone I made using unity.",
      links: [
        {
          link: "https://github.com/Orewagenki/AngryBirdGame",
          icon: <GitHubIcon />,
        },
        {
          link: "",
          icon: <WebIcon />,
        },
      ],
    },
    {
      tag: "React",
      image: gameImage,
      title: "Food App",
      description: "This is a recipe search application I created using React",
      links: [
        {
          link: "https://github.com/Orewagenki/foodapp",
          icon: <GitHubIcon />,
        },
        {
          link: "",
          icon: <WebIcon />,
        },
      ],
    },
    {
      tag: "React",
      image: gameImage,
      title: "Todo app",
      description: "This is a todo application I created using React",
      links: [
        {
          link: "https://github.com/Orewagenki/todoapp",
          icon: <GitHubIcon />,
        },
        {
          link: "",
          icon: <WebIcon />,
        },
      ],
    },
  ],
};
