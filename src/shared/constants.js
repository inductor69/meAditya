const navItems = [
  {
    to: "about",
    num: "1.",
    name: "About"
  },
  {
    to: "projects",
    num: "2.",
    name: "Projects"
  },
  {
    to: "experience",
    num: "3.",
    name: "Experience"
  }
];

const projects = [
  {
    nameId: "PROJECTS_PATCH",
    descriptionId: "PROJECTS_PATCH_DESCRIPTION",
    githubLink: "https://github.com/",
  },
  {
    nameId: "PROJECTS_CHEATERBEATER",
    descriptionId: "PROJECTS_CHEATERBEATER_DESCRIPTION",
    githubLink: "https://github.com/inductor69/Algorithms-Visualiser-App",
  },
  {
    nameId: "PROJECTS_BAUT",
    descriptionId: "PROJECTS_BAUT_DESCRIPTION",
    githubLink: "https://github.com/inductor69/Jot-it-Down",
  },
  {
    nameId: "PROJECTS_BIRDIE",
    descriptionId: "PROJECTS_BIRDIE_DESCRIPTION",
    githubLink: "https://github.com/inductor69/Neumorphic-To-Do",
  },
  {
    nameId: "PROJECTS_STOCK_OVERFLOW",
    descriptionId: "PROJECTS_STOCK_OVERFLOW_DESCRIPTION",
    githubLink: "https://github.com/inductor69/Corona-Tracker",
  },
  {
    nameId: "PROJECTS_JOYRIDE",
    descriptionId: "PROJECTS_JOYRIDE_DESCRIPTION",
    githubLink: "https://github.com/inductor69/News-App",
  }
];

const experiences = [
  {
    imagePath: {
      light: "/imgs/experience/bsw_logo.svg",
      dark: "/imgs/experience/bsw_logo.svg"
    },
    nameId: "EXPERIENCE_OPENTABLE",
    position: "Web Developer",
    duration: "Oct 2020 - May 2021",
    descriptionId: "EXPERIENCE_OPENTABLE_DESCRIPTION"
  }
];

const handles = [
  {
    name: "GitHub",
    icon: ['fab', 'github'],
    link: "https://github.com/inductor69"
  },
  {
    name: "LinkedIn",
    icon: ['fab', 'linkedin-in'],
    link: "https://www.linkedin.com/in/aditya-kumar-b99b1519b/"
  },
  {
    name: "Spotify",
    icon: ['fab', 'spotify'],
    link: "https://open.spotify.com/user/9rr1hnj7ghi73j25xmxnfpuw5?si=zvuocGmFR8Cx-NKZYXo2XA"
  },
  {
    name: "Email",
    icon: "envelope",
    link: "mailto:adityakiitdelhi@gmail.com"
  }
];

const revealProps = {
  duration: 500,
  delay: 400,
  distance: "1.25em",
  bottom: true
};

const likes = ['ABOUT_LIKE_WATERMELON', 'ABOUT_LIKE_MUSIC', 'ABOUT_LIKE_DESIGN', 'ABOUT_LIKE_PREMIER_LEAGUE'];

const dislikes = ['ABOUT_DISLIKE_CILANTRO'];

const themeColors = {
  light: '#fffefb',
  dark: '#222222',
  tan: '#f1e7d0',
};

export { navItems, projects, experiences, handles, revealProps, likes, dislikes, themeColors };
