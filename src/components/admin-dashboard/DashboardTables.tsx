import { Search } from "lucide-react";

// Mock Data for Tickets
const tickets = [
  {
    eventName: "The Playground Summit",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "On Going",
  },
  {
    eventName: "Tedx Bowen University 2025",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "On Going",
  },
  {
    eventName: "Rec Room",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "On Going",
  },
  {
    eventName: "Brothers Conference",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "On Going",
  },
  {
    eventName: "Sisters Conference",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "On Going",
  },
  {
    eventName: "Lead Conference",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "Completed",
  },
  {
    eventName: "Rave Fest",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "Completed",
  },
  {
    eventName: "PDA Dinner",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "Completed",
  },
  {
    eventName: "Tech Fest",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "Completed",
  },
  {
    eventName: "Moonshot 2025",
    eventDate: "12 March, 2025, 12:57 PM",
    Status: "Completed",
  },
];

const DashboardTables = () => {
  const getStatusStyles = (status: string) => {
    if (status === "On Going") {
      return "bg-[#FFF6ED] text-[#C4320A]";
    } else if (status === "Completed") {
      return "bg-[#ECFDF3] text-[#027A48]";
    }
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="w-full max-w-[1400px] bg-white">
      <div className="max-w-screen-2xl mx-auto px-10 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-[322px]">
              <input
                type="text"
                className="w-full h-10 text-[14px] placeholder:text-[#6C7788] rounded-lg border border-[#E9E9E9] pl-10 pr-4 font-regular outline-none focus:border-gray-400 transition-all"
                id="search"
                placeholder="Search"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6C7788]">
                <Search size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E1E4EA] rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F9F9F9] border-b border-[#E1E4EA]">
              <tr>
                <th className="p-3 w-[826px] text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                  Event Name
                </th>

                <th className="whitespace-nowrap p-3 text-xs text-left font-medium text-[#6C7788] uppercase tracking-wider">
                  Event Date
                </th>
                <th className="whitespace-nowrap text-left p-3 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E1E4EA]">
              {tickets.map((el, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="p-3 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal text-left">
                    {el.eventName}
                  </td>
                  <td className="p-3 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal text-left whitespace-nowrap">
                    {el.eventDate}
                  </td>
                  <td className="p-3 text-left whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(
                        el.Status
                      )}`}
                    >
                      {el.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between px-4 py-4 border-t border-[#E1E4EA] bg-white">
            <p className="text-sm text-[#6C7788]">
              <span className="font-medium text-[#1E1E1E]">1-10 of </span>
              <span className="font-medium text-[#1E1E1E]">93</span>
            </p>
            <div className="flex gap-3">
              <button className="px-3.5 py-2 border border-[#E9E9E9] rounded-lg text-sm font-medium text-[#344054] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-3.5 py-2 border border-[#E9E9E9] rounded-lg text-sm font-medium text-[#344054] hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTables;
