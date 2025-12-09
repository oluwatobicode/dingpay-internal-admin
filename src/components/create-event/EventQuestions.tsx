import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { EventFormData } from "../../schema/eventsSchema";
import CreateQuestionsSidebar from "../../ui/create-event/CreateQuestionsSidebar";

const EventQuestions = () => {
  const [showQuestions, setShowQuestion] = useState<boolean>(false);
  const { watch } = useFormContext<EventFormData>();

  const questions = watch("questions") || [];

  const openSidebar = () => {
    setShowQuestion(true);
  };

  return (
    <div className="px-10">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <button
            onClick={openSidebar}
            className="px-5 cursor-pointer bg-black text-white text-[14px] py-2 rounded-lg"
          >
            Add Question
          </button>
        </div>

        <div className="border border-[#E1E4EA] mt-[12px] rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#f9f9f9] border-b border-[#e1e4ea]">
              <tr>
                <th className="p-4 text-xs font-medium text-[#6c7788] uppercase tracking-wider">
                  Question
                </th>
                <th className="p-4 w-[180px] text-xs font-medium text-[#6c7788] uppercase tracking-wider">
                  Required
                </th>
              </tr>
            </thead>

            <tbody className="divide-y bg-white divide-[#E1E4Ea]">
              {questions.length === 0 ? (
                <tr>
                  <td colSpan={2} className="p-8 text-center text-gray-400">
                    No questions added yet
                  </td>
                </tr>
              ) : (
                questions.map((el, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="p-3 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal text-left whitespace-nowrap">
                      {el.question}
                    </td>
                    <td className="p-3 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal text-left whitespace-nowrap">
                      {el.compulsory ? "Yes" : "No"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {showQuestions && (
          <CreateQuestionsSidebar setEventsQuestions={setShowQuestion} />
        )}
      </div>
    </div>
  );
};
export default EventQuestions;
