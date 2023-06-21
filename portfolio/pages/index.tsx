import type { NextPage } from "next";
import Typography from "../components/Typography/Typography";

const user = {
  id: "649387d48ab57bb1f0207eb7",
  name: "Jesús Rodríguez",
  email: "sudo.von.contact@gmail.com",
  username: "sudo_von",
  profilePicture: "https://img.wattpad.com/cover/112805405-256-k968992.jpg",
  about: {
    position: "Software developer",
    interest: "Passionate about ethical hacking",
    quote:
      "At first, dreams seem impossible, then improbable, and eventually inevitable",
  },
};

const Home: NextPage = () => {
  return (
    <div className="m-24">
      <Typography variant="h1" weight="bold" size="large">
        {user.name}
      </Typography>
      <Typography variant="h2" weight="regular" size="big">
        {user.about.position}
      </Typography>
      <Typography variant="h3" weight="light" size="medium">
        {user.about.interest}
      </Typography>
      <Typography variant="small" weight="light" size="small">
        “{user.about.quote}”.
      </Typography>
    </div>
  );
};

export default Home;
