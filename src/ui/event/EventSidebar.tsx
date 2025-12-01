import { X } from "lucide-react";
import { motion } from "framer-motion";
import React, { type ReactNode, useEffect } from "react";

interface SidebarProps {
  activeTab: string;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventSidebar = ({ activeTab, setShowSidebar }: SidebarProps) => {
  const mockData = [
    {
      firstName: "Tolu",
      lastName: "Andula",
      email: "t.andula@gmail.com",
      phoneNumber: "+234901234567",
      ticketType: "Regular",
      Status: "Going",
      checkedIn: "12 March, 2025, 12:57 PM",
    },
  ];

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end h-screen"
      // Close on backdrop click
      onClick={closeSidebar}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="h-screen w-[510px] bg-white flex flex-col shadow-2xl"
      >
        <div className="p-6 border-b border-[#E0E0E0] flex items-center justify-between shrink-0 bg-white">
          <h1 className="text-[20px] font-semibold text-[#1E1E1E] leading-7">
            {activeTab === "All Tickets" ? "Tickets Details" : "Request Payout"}
          </h1>

          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-[#6C7788] hover:text-[#1E1E1E]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {mockData.map((el, i) => (
            <div key={i} className="flex flex-col gap-4">
              <DetailRow label="First Name" value={el.firstName} />
              <DetailRow label="Last Name" value={el.lastName} />
              <DetailRow label="Email" value={el.email} />
              <DetailRow label="Phone Number" value={el.phoneNumber} />
              <DetailRow label="Ticket Type" value={el.ticketType} />

              <div className="w-full flex items-center justify-between">
                <h3 className="text-[14px] font-medium leading-5 text-[#A0A7B4]">
                  Status
                </h3>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    el.Status === "Going"
                      ? "bg-[#ECFDF3] text-[#027A48]"
                      : "bg-[#FFF6ED] text-[#C4320A]"
                  }`}
                >
                  {el.Status}
                </span>
              </div>

              <DetailRow label="Checked-in on" value={el.checkedIn} />

              <button className="text-[#1884F6] cursor-pointer font-medium text-[14px] mt-4 text-left hover:underline">
                View Order Information
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
};

interface DetailRowProps {
  label: string;
  value?: ReactNode;
}

const DetailRow = ({ label, value }: DetailRowProps) => (
  <div className="w-full flex items-center justify-between pb-3 last:border-0">
    <h3 className="text-[14px] font-medium leading-5 text-[#A0A7B4]">
      {label}
    </h3>
    <p className="text-[14px] font-medium leading-5 text-[#1E1E1E]">{value}</p>
  </div>
);

export default EventSidebar;
