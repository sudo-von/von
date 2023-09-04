import { useState } from "react";

const useTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleAnswersTab = () => setSelectedTab(1);

  const handleQuestionsTab = () => setSelectedTab(0);

  return {
    handleAnswersTab,
    handleQuestionsTab,
    selectedTab,
  };
};

export default useTab;
