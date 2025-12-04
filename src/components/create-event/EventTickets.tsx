import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { EventFormData } from "../../schema/eventsSchema";
import CreateTicketSidebar from "../../ui/create-event/CreateTicketSidebar";

const EventsTickets = () => {
  const [createEvent, setCreateTicket] = useState<boolean>(false);
  const {
    watch,
    formState: { errors },
  } = useFormContext<EventFormData>();

  const singleTickets = watch("singleTickets") || [];
  const groupTickets = watch("groupTickets") || [];
  const allTickets = [...singleTickets, ...groupTickets];

  const showSideBar = () => {
    setCreateTicket(true);
  };

  return (
    <div className="px-10 h-screen">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <button
            onClick={showSideBar}
            className="w-[92px] cursor-pointer bg-black text-white text-[14px] h-[32px] rounded-lg"
          >
            Add Ticket
          </button>
        </div>

        {errors.singleTickets && (
          <p className="text-red-500 text-sm mt-2">
            {errors.singleTickets.message}
          </p>
        )}
        <div className="border border-[#E1E4EA] mt-[12px] rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F9F9F9] border-b border-[#E1E4EA]">
              <tr>
                <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                  Ticket Name
                </th>
                <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                  Ticket Quantity
                </th>
                <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                  Ticket Price
                </th>
                <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                  Ticket Type
                </th>
              </tr>
            </thead>

            <tbody className="divide-y bg-white divide-[#E1E4Ea]">
              {allTickets.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">
                    No tickets added yet
                  </td>
                </tr>
              ) : (
                allTickets.map((ticket, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 text-sm font-medium text-[#1E1E1E]">
                      {ticket.name}
                    </td>
                    <td className="p-3 text-sm font-medium text-[#1E1E1E]">
                      {ticket.unlimitedTicket
                        ? "Unlimited"
                        : ticket.ticketQuantity}
                    </td>
                    <td className="p-3 text-sm font-medium text-[#1E1E1E]">
                      {ticket.freeTickets
                        ? "Free"
                        : `₦${ticket.pricePerTicket.toLocaleString()}`}
                    </td>
                    <td className="p-3 text-sm font-medium text-[#1E1E1E]">
                      {"groupSize" in ticket ? "Group" : "Single"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {createEvent && <CreateTicketSidebar setCreateTicket={setCreateTicket} />}
    </div>
  );
};
export default EventsTickets;
