import { ContentProps } from "../components/content/content";

export const contents: ContentProps[] = [
  {
    title: "Software engineer",
    subtitle: "Passionate about ethical hacking",
    description: "At first, dreams seem impossible,\nthen improbable, and eventually inevitable.",
  },
  {
    title: "Introduction",
    subtitle:
      "I was fortunate.\nI found my passion early in life.",
    description:
      "Since I was a child, I’ve had a dream in mind,\nthe dream of being able to live in the country\nI highly respect and aspire to be a part of. \n\nBut you can't live on dreams alone;\nyou have to work hard for them.\n\nThat's why I decided to embrace education\nas the driving force to achieve my dreams.",
    media: {
      video: {
        title: "Meet the person behind the code.",
        src: "https://www.youtube.com/embed/gmp0istg5xo",
      },
    },
  },
  {
    title: "Experience",
    subtitle:
      "Code is just a tool.\nTrue impact lies in changing lives.",
    description:
      "In my journey as a developer, I've realized\nthat code is not merely lines of instructions,\nbut a means to create something meaningful.\n\nBy working closely with diverse companies\nI've had the privilege of positively impacting many lives.\n\nMy biggest goal as a developer is to use the\npower of code to bring a positive change in people's lives.",
    media: {
      timelines: [
        {
          company: "Intel corporation",
          position: "Software engineer",
          startDate: new Date("December 1, 2021").toISOString(),
          endDate: new Date("March 1, 2023").toISOString(),
          description: `- Established frontend code guidelines for best practices.
          - Participated in code reviews and story refining processes.
          - Presented frontend and security topics in dev sync meetings.
          - Led the migration and refactoring of legacy react code using hooks.
          - Conducted pair programming sessions to train team members on new features.
          - Discovered critical flaws in multiple projects, prompting quick hotfixes.
          - Presented findings to the corporation to address and prevent security issues.`,
          src: "https://logodownload.org/wp-content/uploads/2014/04/intel-logo-1-1.png",
        },
        {
          company: "Tredicom",
          position: "Software developer",
          startDate: new Date("November 1, 2020").toISOString(),
          endDate: new Date("November 30, 2021").toISOString(),
          description: `- Worked on microservices development.
          - Presented frontend topics in dev sync meetings.`,
          src: "https://scontent.fntr5-1.fna.fbcdn.net/v/t39.30808-6/300443824_168920352354407_1778796302346087197_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T7UVAHk-Xh8AX_F6TvR&_nc_ht=scontent.fntr5-1.fna&oh=00_AfA1ivJ9oPWt3BlHB_q5NPHnEHejdrmujfB213GrafOpgg&oe=64CF93AB",
        },
        {
          company: "Evotek",
          position: "Software developer",
          startDate: new Date("June 1, 2019").toISOString(),
          endDate: new Date("November 30, 2020").toISOString(),
          description: `- Developed custom systems to meet the needs of clients.
          - Gathered requirements from various clients for system planning and development.`,
          src: "https://evotek.vn/wp-content/uploads/2020/05/LinkedIn-Personal-Profile-Image-400x400-1.png",
        },
      ],
    },
  },
  {
    title: "Cybersecurity",
    subtitle: "Developer by day.\nEthical hacker by night.",
    description:
      "I’ve participated in multiple national-level\ncompetitions, achieving top positions by\nbreaking through controlled systems.\n\nMy cybersecurity experience has allowed me\nto view development from a different angle.\n\nOne of my biggest achievements was\ndiscovering and successfully fixing multiple\ncritical vulnerabilities at Intel Corporation.",
    media: {
      video: {
        title: "Interview conducted by a national television station.",
        src: "https://www.youtube.com/embed/urmi2wbEpGk",
      },
    },
  },
  {
    title: "Technologies",
    subtitle: "Interactivity, dynamism, creativity.\nI'm talking about Javascript.",
    description:
      "I’m a passionate JavaScript enthusiast,\nwith aspirations of becoming an expert.\n\nMy tech stack covers a wide range of\nresources that allow me to develop efficient\nand high-quality applications and websites.\n\nFrom architecture to implementation,\nI'm ready to take on challenges to deliver\nthe most outstanding results.",
    media: {
      vectors: [
        { alt: 'javascript', src: 'javascript.svg'},
        { alt: 'typescript', src: 'typescript.svg'},
        { alt: 'nextjs', src: 'nextjs.svg'},
        { alt: 'nodejs', src: 'nodejs.svg'},
        { alt: 'express', src: 'express.svg'},
        { alt: 'npm', src: 'npm.svg'},
        { alt: 'git', src: 'git.svg'},
        { alt: 'react', src: 'react.svg'},
        { alt: 'redux', src: 'redux.svg'},
        { alt: 'graphql', src: 'graphql.svg'},
        { alt: 'jest', src: 'jest.svg'},
        { alt: 'react testing library', src: 'testing-library.svg'},
        { alt: 'docker', src: 'docker.svg'},
        { alt: 'kubernetes', src: 'kubernetes.svg'},
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