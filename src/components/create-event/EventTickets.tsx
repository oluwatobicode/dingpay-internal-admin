import { useState } from "react";
import CreateTicketSidebar from "../../ui/create-event/CreateTicketSidebar";

const EventsTickets = () => {
  const [createEvent, setCreateTicket] = useState<boolean>(false);

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
            Add Event
          </button>
        </div>

        <div className="border border-[#E1E4EA] mt-[12px] rounded-xl overflow-hidden">
          <table className="w-full text-left  border-collapse">
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

            <tbody>
              {/* <tr>
                <td>1</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>

      {createEvent && <CreateTicketSidebar setCreateTicket={setCreateTicket} />}
    </div>
  );
};
export default EventsTickets;
