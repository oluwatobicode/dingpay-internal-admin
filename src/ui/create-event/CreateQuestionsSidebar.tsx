import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { EventFormData } from "../../schema/eventsSchema";
import ToggleSwitch from "./ToggleSwitch";

interface CreateQuestionsProps {
  setEventsQuestions: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateQuestionsSidebar = ({
  setEventsQuestions,
}: CreateQuestionsProps) => {
  const [questionText, setQuestionText] = useState("");
  const [isCompulsory, setIsCompulsory] = useState(false);

  const { watch, setValue } = useFormContext<EventFormData>();
  const currentQuestions = watch("questions") || [];

  const closeSidebar = () => {
    setEventsQuestions(false);
  };

  const handleAddQuestion = () => {
    if (!questionText.trim()) {
      alert("Please enter a question");
      return;
    }

    const newQuestion = {
      question: questionText,
      compulsory: isCompulsory,
    };

    setValue("questions", [...currentQuestions, newQuestion]);
    setQuestionText("");
    setIsCompulsory(false);
    closeSidebar();
  };

  const handlePowerToggle = (state: boolean) => {
    setIsCompulsory(state);
  };

  return (
    <main className="fixed inset-0 bg-black/50 z-50 flex justify-end h-screen">
      <div className="h-screen w-[510px] bg-white flex flex-col shadow-2xl">
        <div className="p-6 border-b border-[#E0E0E0] flex items-center justify-between shrink-0 bg-white">
          <h1>Add question</h1>

          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-[#6C7788] hover:text-[#1E1E1E]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-5 h-full">
          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Question
            </label>
            <textarea
              className="w-full px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              rows={4}
              placeholder="Question"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
            <div className="mt-5 flex flex-row items-center gap-[10px]">
              <h1 className="font-medium text-[14px] leading-[16px] tracking-normal">
                The question is compulsory
              </h1>

              <ToggleSwitch
                initial={isCompulsory}
                onToggle={handlePowerToggle}
              />
            </div>
          </div>

          <button
            onClick={handleAddQuestion}
            className="mt-auto bg-black p-2 rounded-[8px] text-white font-semibold text-[14px] tracking-normal cursor-pointer hover:bg-gray-800 transition-colors"
          >
            Add Question
          </button>
        </div>
      </div>
    </main>
  );
};
export default CreateQuestionsSidebar;
