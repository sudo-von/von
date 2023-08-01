import { ContentProps } from "../components/content/content";

export const contents: ContentProps[] = [
  {
    title: "Introduction",
    subtitle:
      "I was fortunate.\nI found my passion early in life.",
    description:
      "Since I was a child, I’ve had a dream in mind,\nthe dream of being able to live in Canada. \n\nBut you can't live on dreams alone;\nyou have to work hard for them.\n\nThat's why I decided to embrace education\nas the driving force to achieve my dreams.",
    media: {
      video: {
        title: "Meet the person behind the code.",
        src: "https://www.youtube.com/embed/bfv-VaaAlxc",
      },
    },
  },
  {
    title: "Experience",
    subtitle:
      "Code is just a tool.\nTrue achievement lies in its impact on lives.",
    description:
      "In my journey as a developer, I've realized\nthat code is not merely lines of instructions,\nbut a means to create something meaningful.\n\nBy working with diverse companies\nI've been fortunate to make a positive\nimpact on the lives of many.\n\nMy biggest goal as a developer is to use the power\n of code to bring a positive change in people's lives.",
    media: {
      timelines: [
        {
          title: "Intel corporation",
          startDate: new Date("December 1, 2021").toISOString(),
          endDate: new Date("March 1, 2023").toISOString(),
          description: "Full stack engineer",
          src: "https://logodownload.org/wp-content/uploads/2014/04/intel-logo-1-1.png",
        },
        {
          title: "Tredicom",
          startDate: new Date("November 1, 2020").toISOString(),
          endDate: new Date("November 30, 2021").toISOString(),
          description: "Full stack developer",
          src: "https://scontent.fntr5-1.fna.fbcdn.net/v/t39.30808-6/300443824_168920352354407_1778796302346087197_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AFeFYwEAO1YAX-sqqaC&_nc_ht=scontent.fntr5-1.fna&oh=00_AfADKTqwqkpPAH7GpLqZhdftMMgRtZxZ6iFvdUp3NXn3nw&oe=64C1BBEB",
        },
        {
          title: "Evotek",
          startDate: new Date("June 1, 2019").toISOString(),
          endDate: new Date("November 30, 2020").toISOString(),
          description: "Full stack developer",
          src: "https://evotek.vn/wp-content/uploads/2020/05/LinkedIn-Personal-Profile-Image-400x400-1.png",
        },
      ],
    },
  },
  {
    title: "Cybersecurity",
    subtitle: "Developer by day.\nEthical hacker by night.",
    description:
      "I’ve participated in multiple national-level\ncompetitions, achieving top positions by breaking\nthrough controlled systems.\n\nAs a developer, I use my security knowledge to\nuncover overlooked vulnerabilities.\n\nOne of my biggest achievements was discovering\nand successfully fixing multiple critical vulnerabilities\nat Intel Corporation,  being the bridge between the\ncybersecurity area and the development team.",
    media: {
      video: {
        title: "Interview conducted by a national television station.",
        src: "https://www.youtube.com/embed/bfv-VaaAlxc",
      },
    },
  },
  {
    title: "Technologies",
    subtitle: "Mastering the JavaScript tech stack.",
    description:
      "I’m a passionate JavaScript enthusiast,\nwith aspirations of becoming an expert one day.\n\nMy tech stack covers a wide range of resources that\nallow me to develop efficient and high-quality\napplications and websites.\n\nFrom architecture to implementation,\nI'm ready to take on challenges and make\nthe most of modern tools to deliver outstanding results.",
    media: {
      vectors: [
        { alt: 'javascript', src: 'javascript.svg'},
        { alt: 'typescript', src: 'typescript.svg'},
        { alt: 'nextjs', src: 'nextjs.svg'},
        { alt: 'nodejs', src: 'nodejs.svg'},
        { alt: 'express', src: 'express.svg'},
        { alt: 'react', src: 'react.svg'},
        { alt: 'redux', src: 'redux.svg'},
        { alt: 'graphql', src: 'graphql.svg'},
        { alt: 'npm', src: 'npm.svg'},
        { alt: 'jest', src: 'jest.svg'},
        { alt: 'react testing library', src: 'testing-library.svg'},
        { alt: 'docker', src: 'docker.svg'},
        { alt: 'kubernetes', src: 'kubernetes.svg'},
        { alt: 'git', src: 'git.svg'},
        { alt: 'jenkins', src: 'jenkins.svg'},
        { alt: 'docker compose', src: 'docker-compose.svg'},
        { alt: 'storybook', src: 'storybook.svg'},
        { alt: 'sass', src: 'sass.svg'},
        { alt: 'tailwindcss', src: 'tailwindcss.svg'},
        { alt: 'bootstrap', src: 'bootstrap.svg'},
        { alt: 'materialui', src: 'materialui.svg'},
        { alt: 'webpack', src: 'webpack.svg'},
        { alt: 'eslint', src: 'eslint.svg'},
        { alt: 'babel', src: 'babel.svg'},
        { alt: 'jquery', src: 'jquery.svg'},
        { alt: 'mysql', src: 'mysql.svg'},
        { alt: 'postgresql', src: 'postgresql.svg'},  
        { alt: 'mongodb', src: 'mongodb.svg'},
      ]
    },
  },
];