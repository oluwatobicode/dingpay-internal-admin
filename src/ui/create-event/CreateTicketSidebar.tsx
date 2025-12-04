import { X } from "lucide-react";
import { useState } from "react";
import SingleTicket from "./SingleTicket";
import GroupTickets from "./GroupTickets";

interface CreateTicketProps {
  setCreateTicket: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTicketSidebar = ({ setCreateTicket }: CreateTicketProps) => {
  const [activeTab, setActiveTab] = useState<"single" | "group">("single");

  const closeSidebar = () => {
    setCreateTicket(false);
  };

  return (
    <main className="fixed inset-0 bg-black/50 z-50 flex justify-end h-screen">
      <div className="h-screen w-[510px] bg-white flex flex-col shadow-2xl">
        <div className="p-6 border-b border-[#E0E0E0] flex items-center justify-between shrink-0 bg-white">
          <h1 className="text-[20px] font-semibold text-[#1E1E1E] leading-7">
            Add Tickets
          </h1>

          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-[#6C7788] hover:text-[#1E1E1E]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex mt-3 mb-3 px-6">
          <button
            onClick={() => setActiveTab("single")}
            className={`flex-1 py-3 border-2 cursor-pointer rounded-l-lg text-center font-medium text-[16px] transition-all ${
              activeTab === "single"
                ? "text-white bg-[#1884F6]"
                : "text-[#6C7788] bg-white hover:bg-gray-50"
            }`}
          >
            Single ticket
          </button>
          <button
            onClick={() => setActiveTab("group")}
            className={`flex-1 py-3  border-2 cursor-pointer rounded-r-lg text-center font-medium text-[16px] transition-all ${
              activeTab === "group"
                ? "text-white bg-[#1884F6]"
                : "text-[#6C7788] bg-white hover:bg-gray-50"
            }`}
          >
            Group ticket
          </button>
        </div>

        <div className="p-5 overflow-auto flex-1">
          {activeTab === "single" ? (
            <SingleTicket onClose={closeSidebar} />
          ) : (
            <GroupTickets onClose={closeSidebar} />
          )}
        </div>
      </div>
    </main>
  );
};
export default CreateTicketSidebar;
