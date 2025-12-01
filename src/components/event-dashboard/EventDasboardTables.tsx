import { useState } from "react";
import { Search, ChevronDown, Check, X } from "lucide-react";
import Sidebar from "../../ui/event/EventSidebar";
import OrderSidebar from "../../ui/event/EventOrderSidebar";

interface TabButtonProps {
  name: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tickets = [
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "VIP",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "VIP",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Going",
  },
];

const orderData = {
  orderId: "x2d874chidcerco3",
  noOfTickets: 1,
  orderAmount: "₦7,500",
  dingFee: "₦325",
  payout: "₦7,175",
  netRevenue: "₦112.5",
  buyerName: "Tolu Andula",
  buyerEmail: "t.andula@gmail.com",
  date: "12 March, 2025, 12:57 PM",
  tickets: [
    {
      ticketNumber: 1,
      ticketType: "Regular",
      name: "Tolu Andula",
      email: "t.andula@gmail.com",
    },
    {
      ticketNumber: 1,
      ticketType: "VIP",
      name: "Tolu Andula",
      email: "t.andula@gmail.com",
    },
  ],
};

const payouts = [
  {
    recipientName: "TedX Bowen University 2025",
    recipientBank: "First Bank",
    accountNumber: "009012345",
    payoutAmount: "₦449,150",
    payoutDate: "12 March, 2025, 12:57 PM",
    status: "Pending",
  },
  {
    recipientName: "TedX Bowen University 2025",
    recipientBank: "First Bank",
    accountNumber: "009012345",
    payoutAmount: "₦449,150",
    payoutDate: "12 March, 2025, 12:57 PM",
    status: "Paid",
  },
];

const orders = Array(10).fill(orderData);

const TabButton = ({ name, activeTab, setActiveTab }: TabButtonProps) => (
  <button
    onClick={() => setActiveTab(name)}
    className={`pb-3 transition-colors ${
      activeTab === name
        ? "border-b-2 border-[#1884F6] font-medium text-[#1884F6]"
        : "text-[#6C7788] hover:text-[#1E1E1E]"
    }`}
  >
    {name}
  </button>
);

const EventDashboardTables = () => {
  const [activeTab, setActiveTab] = useState("All Tickets");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showOrderSidebar, setShowOrderSidebar] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<typeof orderData | null>(
    null
  );

  const open = () => {
    setShowSidebar(true);
  };

  const openOrder = (order: typeof orderData) => {
    setSelectedOrder(order);
    setShowOrderSidebar(true);
  };

  const getStatusStyles = (status: string) => {
    if (status === "Going") {
      return "bg-[#FFF6ED] text-[#C4320A]";
    } else if (status === "Checked-in") {
      return "bg-[#ECFDF3] text-[#027A48]";
    }
    return "bg-gray-100 text-gray-600";
  };

  const getStatusPayment = (status: string) => {
    if (status === "Pending") {
      return "bg-[#FFF6ED] text-[#C4320A]";
    } else if (status === "Paid") {
      return "bg-[#ECFDF3] text-[#027A48]";
    }
  };

  return (
    <div className="w-full max-w-[1400px] bg-white">
      <div className="max-w-screen-2xl mx-auto px-10 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-8 border-b border-[#E9E9E9]">
            <TabButton
              name="All Tickets"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              name="Orders"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              name="Payouts"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

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

            <div className="flex items-center gap-3">
              {activeTab === "All Tickets" && (
                <>
                  <div className="relative">
                    <select className="appearance-none h-10 pl-4 pr-10 rounded-lg border border-[#E9E9E9] text-sm font-medium text-[#344054] bg-white outline-none focus:border-gray-400 cursor-pointer">
                      <option>Ticket Type: All</option>
                      <option>Regular</option>
                      <option>VIP</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C7788] pointer-events-none"
                      size={16}
                    />
                  </div>

                  <div className="relative">
                    <select className="appearance-none h-10 pl-4 pr-10 rounded-lg border border-[#E9E9E9] text-sm font-medium text-[#344054] bg-white outline-none focus:border-gray-400 cursor-pointer">
                      <option>Status: All</option>
                      <option>Going</option>
                      <option>Checked-in</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C7788] pointer-events-none"
                      size={16}
                    />
                  </div>
                </>
              )}

              {activeTab === "Payouts" && (
                <>
                  <div className="relative">
                    <select className="appearance-none h-10 pl-4 pr-10 rounded-lg border border-[#E9E9E9] text-sm font-medium text-[#344054] bg-white outline-none focus:border-gray-400 cursor-pointer">
                      <option>Status: All</option>
                      <option>Going</option>
                      <option>Checked-in</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C7788] pointer-events-none"
                      size={16}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="border border-[#E1E4EA] rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F9F9F9] border-b border-[#E1E4EA]">
              <tr>
                {activeTab === "All Tickets" ? (
                  <>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Full Name
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Email
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Ticket Type
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Status
                    </th>
                  </>
                ) : activeTab === "Orders" ? (
                  <>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      No of Tickets
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Order Amount
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Ding Fee
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Payout
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Net Revenue
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Buyer Name
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Buyer Email
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Date
                    </th>
                  </>
                ) : (
                  <>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Recipient name
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Recipient Bank
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Account Number
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Payout Amount
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Payout Date
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Action
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E1E4EA]">
              {activeTab === "All Tickets" &&
                tickets.map((el, i) => (
                  <tr
                    key={i}
                    onClick={open}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.fullName}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.email}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.phoneNumber}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.ticketType}
                    </td>
                    <td className="p-4">
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

              {activeTab === "Orders" &&
                orders.map((el, i) => (
                  <tr
                    key={i}
                    onClick={() => openOrder(el)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.orderId}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.noOfTickets}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.orderAmount}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.dingFee}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.payout}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.dingFee}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.buyerName}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.buyerEmail}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.date}
                    </td>
                  </tr>
                ))}

              {activeTab === "Payouts" &&
                payouts.map((el, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.recipientName}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.recipientBank}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.accountNumber}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.payoutAmount}
                    </td>
                    <td className="p-4 text-sm font-medium text-[#1E1E1E] leading-5 tracking-normal">
                      {el.status === "Pending" ? "-" : el.payoutDate}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusPayment(
                          el.status
                        )}`}
                      >
                        {el.status}
                      </span>
                    </td>
                    <td className="flex flex-row gap-3 p-4 cursor-pointer items-center justify-center">
                      {el.status === "Pending" && (
                        <>
                          <button className="bg-[#067823] w-8 h-5 rounded-lg flex items-center justify-center">
                            <Check color="#fff" />
                          </button>
                          <button className=" w-8 h-5 rounded-lg cursor-pointer bg-[#780606] flex items-center justify-center">
                            <X color="#ffff" />
                          </button>
                        </>
                      )}
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

        {/* sidebars */}
        <>
          {showSidebar && (
            <Sidebar activeTab={activeTab} setShowSidebar={setShowSidebar} />
          )}

          {showOrderSidebar && (
            <OrderSidebar
              order={selectedOrder}
              setShowOrderSidebar={setShowOrderSidebar}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default EventDashboardTables;
