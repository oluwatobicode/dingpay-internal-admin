import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface Ticket {
  ticketNumber?: number;
  ticketType?: string;
  name?: string;
  email?: string;
}

interface Order {
  orderId: string;
  noOfTickets?: number | string;
  orderAmount?: string;
  dingFee?: string;
  netRevenue: string;
  discount?: string;
  payout?: string;
  buyerName?: string;
  buyerEmail?: string;
  date?: string;
  tickets?: Ticket[];
}

interface OrderSidebarProps {
  order: Order | null;
  setShowOrderSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailRow = ({
  label,
  value,
}: {
  label: string;
  value?: string | number | undefined;
}) => (
  <div className="w-full flex items-center justify-between  last:border-0">
    <h3 className="text-[14px] font-medium leading-5 text-[#A0A7B4]">
      {label}
    </h3>
    <p className="text-[14px] font-medium leading-5 text-[#1E1E1E]">
      {value ?? "-"}
    </p>
  </div>
);

const EventOrderSidebar = ({
  order,
  setShowOrderSidebar,
}: OrderSidebarProps) => {
  const closeSidebar = () => {
    setShowOrderSidebar(false);
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!order) return null;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={closeSidebar}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end h-screen"
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
            Order Details
          </h1>

          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-[#6C7788] hover:text-[#1E1E1E]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <h2 className="text-[14px] leading-[20px] tracking-normal text-[#000000] font-medium mt-[24px] mb-[24px]">
            Order information
          </h2>
          <div className="flex flex-col gap-[16px]">
            <DetailRow label="Order ID" value={order.orderId} />
            <DetailRow label="Order Amount" value={order.orderAmount} />
            <DetailRow label="Discount" value={order.discount} />
            <DetailRow label="Discount" value={order.dingFee} />
            <DetailRow label="Fee" value={order.dingFee} />
            <DetailRow label="Payout" value={order.payout} />
            <DetailRow label="Net Revenue" value={order.netRevenue} />
            <DetailRow label="Order Date" value={order.date} />
            <DetailRow label="Buyer Name" value={order.buyerName} />
            <DetailRow label="Buyer Email" value={order.buyerEmail} />
          </div>

          <div className="border flex items-center justify-center my-[32px] border-[#E0E0E0]"></div>

          <h2 className="text-[14px] leading-[20px] tracking-normal text-[#000000] font-medium mt-6 mb-[24px]">
            Ticket information
          </h2>

          <div className="flex flex-col gap-[16px]">
            {(order.tickets && order.tickets.length > 0
              ? order.tickets
              : [
                  {
                    ticketNumber: 1,
                    ticketType: "Regular",
                    name: "Tolu Andula",
                    email: "t.andula@gmail.com",
                  },
                ]
            ).map((t, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-[14px] leading-[20px] tracking-normal text-[#000000] font-medium">
                  Ticket {idx + 1}
                </h3>
                <DetailRow label="Ticket type" value={t.ticketType} />
                <DetailRow label="Name" value={t.name} />
                <DetailRow label="Email" value={t.email} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default EventOrderSidebar;
