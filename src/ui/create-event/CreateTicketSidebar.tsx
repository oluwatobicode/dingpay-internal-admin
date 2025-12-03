import { X } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { EventFormData } from "../../schema/eventsSchema";

interface CreateTicketProps {
  setCreateTicket: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTicketSidebar = ({ setCreateTicket }: CreateTicketProps) => {
  const [activeTab, setActiveTab] = useState("Single Ticket");

  const closeSidebar = () => {
    setCreateTicket(false);
  };

  const {
    register,
    formState: { errors },
  } = useFormContext<EventFormData>();

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

        <div className=""></div>
      </div>
    </main>
  );
};
export default CreateTicketSidebar;
