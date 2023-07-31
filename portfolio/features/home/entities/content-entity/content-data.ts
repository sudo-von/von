import { IContent } from "./content-entity";

export const contents: IContent[] = [
  {
    title: "Introduction",
    subtitle:
      "I was fortunate.\nI discovered what I loved to do early in life.",
    description:
      "Since I was a child, I’ve had a dream in mind,\nthe dream of being able to live in Canada. \n\nBut you can't live on dreams alone;\nyou have to work hard for them.\n\nThat's why I decided to embrace education\nas the driving force to achieve my dreams.",
    media: {
      type: "video-media",
      video: {
        title: "about me",
        src: "https://www.youtube.com/embed/SqcY0GlETPk?controls=0",
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
      type: "timeline-media",
      timelines: [
        {
          title: "Intel corporation",
          startDate: new Date("2021-11-01").toString(),
          endDate: new Date("2023-03-01").toString(),
          description: "Full stack engineer",
          src: "https://logodownload.org/wp-content/uploads/2014/04/intel-logo-1-1.png",
        },
        {
          title: "Tredicom",
          startDate: new Date("2020-10-01").toString(),
          endDate: new Date("2021-12-01").toString(),
          description: "Full stack developer",
          src: "https://scontent.fntr5-1.fna.fbcdn.net/v/t39.30808-6/300443824_168920352354407_1778796302346087197_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AFeFYwEAO1YAX-sqqaC&_nc_ht=scontent.fntr5-1.fna&oh=00_AfADKTqwqkpPAH7GpLqZhdftMMgRtZxZ6iFvdUp3NXn3nw&oe=64C1BBEB",
        },
        {
          title: "Evotek",
          startDate: new Date("2019-06-01").toString(),
          endDate: new Date("2020-11-01").toString(),
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
      type: "video-media",
      video: {
        title: "about-me",
        src: "https://www.youtube.com/embed/2Qftkzf8VKI",
      },
    },
  },
  {
    title: "Technologies",
    subtitle: "Mastering the JavaScript tech stack.",
    description:
      "I’m a passionate JavaScript enthusiast,\nwith aspirations of becoming an expert one day.\n\nMy tech stack covers a wide range of resources that\nallow me to develop efficient and high-quality\napplications and websites.\n\nFrom architecture to implementation,\nI'm ready to take on challenges and make\nthe most of modern tools to deliver outstanding results.",
    media: {
      type: "video-media",
      video: {
        title: "about-me",
        src: "https://www.youtube.com/embed/oBEgjI0Wxaw",
      },
    },
  },
];