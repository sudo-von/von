import { NextPage } from "next";
import Button from "../../components/Button/Button";
import AskLayout from "../../features/ask/layouts/AskLayout/AskLayout";
import AskProfile from "../../features/ask/components/AskProfile/AskProfile";
import HelperInput from "../../components/HelperInput/HelperInput";

const Ask: NextPage = () => {
  return (
    <AskLayout>
      <AskProfile
        src="https://i.pinimg.com/564x/6e/7b/26/6e7b267306d1f726cc804122990ffe18.jpg"
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
    </AskLayout>
  );
};

export default Ask;
