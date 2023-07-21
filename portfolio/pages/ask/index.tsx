import { NextPage } from "next";
import Button from "../../components/Button/Button";
import AskLayout from "../../features/ask/layouts/AskLayout/AskLayout";
import AskProfile from "../../features/ask/components/AskProfile/AskProfile";
import HelperInput from "../../components/HelperInput/HelperInput";
import Typography from "../../components/Typography/Typography";

const Ask: NextPage = () => {
  return (
    <AskLayout>
      <AskProfile
        src="https://i.pinimg.com/564x/e2/55/be/e255be1da7c71138cec7648fa620a0df.jpg"
        name="Jesús Rodríguez"
        position="Software engineer"
        interest="Passionate about ethical hacking"
        metrics={{
          totalViews: 10,
          totalQuestions: 20,
          totalAnswers: 30,
        }}
      />
      <HelperInput helper="0/300" placeholder="Ask me a question!" />
      <Button>Send question</Button>
      <div className="mt-3">
        <div className="hover:shadow cursor-pointer flex flex-col gap-3 p-5 border border-slate-100 focus:border-slate-200 focus:outline-none rounded">
          <Typography weight="bold" variant="caption">
            “Lorem ipsum dolor”
          </Typography>
          <Typography weight="light" variant="legend" color="slate">
            Jun 19, 2023, 3:30 PM
          </Typography>
          <Typography weight="light" variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
            tempor incididunt ut labore. Lorem ipsum dolor sit...
          </Typography>
        </div>
      </div>
    </AskLayout>
  );
};

export default Ask;
