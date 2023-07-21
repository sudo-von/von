import { NextPage } from "next";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import AskProfile from "../../features/ask/components/AskProfile/AskProfile";
import AskQuestion from "../../features/ask/components/AskQuestion/AskQuestion";
import QuestionsLayout from "../../features/question/layouts/questions-layout/questions-layout";

const Ask: NextPage = () => {
  return (
    <QuestionsLayout>
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
      <Input placeholder="Ask me a question!" label="Question" hint="0/100" />
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
    </QuestionsLayout>
  );
};

export default Ask;
