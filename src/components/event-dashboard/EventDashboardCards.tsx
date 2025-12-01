import { QrCode, ExternalLink } from "lucide-react";
import SidebarQR from "../../ui/event/EventSidebarQR";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const EventDashboardCards = () => {
  const [showQr, setShowQr] = useState<boolean>(false);

  const onClick = () => {
    setShowQr(true);
  };

  const mainStats = [
    {
      title: "Tickets",
      value: 93,
      sub: "Number of tickets sold",
    },
    {
      title: "Guest checked-in",
      value: 23,
      sub: "Number of guests checked-in",
    },
  ];

  const stats = [
    {
      title: "Tickets Sales",
      value: "₦849,150",
      sub: "Value of tickets sold",
    },
    {
      title: "Payout",
      value: "₦449,150",
      sub: "Money paid out to you",
    },
    {
      title: "Balance",
      value: "₦400,000",
      sub: "Your balance left with us",
    },
    {
      title: "Revenue",
      value: "₦38,125",
      sub: "Sum of all Ding fee",
    },
    {
      title: "Net revenue",
      value: "₦14,062.50",
      sub: "Revenue after paystack fee",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] min-w-5xl bg-white">
      <div className="max-w-screen-2xl mx-auto px-10 py-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <h1 className="text-[24px] font-semibold leading-none tracking-tight text-[#111111]">
              Tedx Bowen University 2025
            </h1>
          </div>

          <div className="flex flex-row gap-3">
            <button
              onClick={onClick}
              className="h-9 px-4 cursor-pointer rounded-lg border border-[#E9E9E9] text-sm text-[#1E1E1E] font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <QrCode size={16} />
              Event QR
            </button>
            <button className="h-9 px-4 cursor-pointer bg-[#111111] text-white text-sm font-medium rounded-lg hover:bg-black/80 transition-colors flex items-center gap-2">
              Event Page
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-6">
            {mainStats.map((ele, index) => (
              <div
                key={index}
                className="w-[660px] bg-white rounded-lg border border-[#EFEFEF] flex flex-col overflow-hidden"
              >
                <div className="bg-[#FAFAFA] px-4 py-3 border-b border-[#EFEFEF]">
                  <h2 className="text-[13px] text-[#555555] font-medium leading-tight">
                    {ele.title}
                  </h2>
                </div>

                <div className="px-4 py-6 flex flex-col justify-between h-full">
                  <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-1">
                    {ele.value.toLocaleString()}
                  </h2>
                  <p className="text-[13px] text-[#888888] leading-tight">
                    {ele.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-[250px] bg-white rounded-lg border border-[#EFEFEF] flex flex-col overflow-hidden"
              >
                <div className="bg-[#FAFAFA] px-4 py-3 border-b border-[#EFEFEF]">
                  <h2 className="text-[13px] text-[#555555] font-medium leading-tight">
                    {stat.title}
                  </h2>
                </div>

                <div className="px-4 py-6 flex flex-col justify-between h-full">
                  <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-1">
                    {stat.value}
                  </h2>
                  <p className="text-[13px] text-[#888888] leading-tight">
                    {stat.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showQr && <SidebarQR setShowQr={setShowQr} />}
      </AnimatePresence>
    </div>
  );
};

export default EventDashboardCards;
