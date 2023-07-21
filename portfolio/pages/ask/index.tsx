import { NextPage } from "next";
import Button from "../../components/Button/Button";
import AskLayout from "../../features/ask/layouts/AskLayout/AskLayout";
import AskProfile from "../../features/ask/components/AskProfile/AskProfile";
import AskQuestion from "../../features/ask/components/AskQuestion/AskQuestion";
import Input from "../../components/Input/Input";

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
      <Input placeholder="Ask me a question!" helper="0/300" />
      <Button>Send question</Button>
      <div className="flex flex-col mt-3 gap-3">
        <AskQuestion
          id="1"
          question="Lorem ipsum dolor"
          askedAt={new Date()}
          answer="Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
            tempor incididunt ut labore. Lorem ipsum dolor sit..."
        />
      </div>
    </AskLayout>
  );
};

export default Ask;
