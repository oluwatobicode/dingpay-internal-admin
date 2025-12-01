import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full min-w-5xl border-b border-[#E9E9E9] bg-white">
      <div className="max-w-screen-2xl mx-auto px-12 py-6 flex items-center justify-between">
        <div className="shrink-0">
          <img src="Logo.svg" alt="TicketsByDingPay Logo" />
        </div>

        <div className="flex flex-row gap-3">
          <button className="w-[95px] h-8 rounded-lg border border-[#E9E9E9] text-sm text-[#1E1E1E] font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
            Contact Us
          </button>

          <button
            aria-label="Logout"
            className="w-10 h-8 cursor-pointer flex items-center justify-center rounded-lg border border-[#E9E9E9] hover:bg-red-50 hover:border-red-100 transition-colors"
          >
            <LogOut size={18} color="#D32F2F" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
