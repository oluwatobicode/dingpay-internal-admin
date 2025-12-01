import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface SidebarQRProps {
  setShowQr: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventSidebarQR = ({ setShowQr }: SidebarQRProps) => {
  const closeSidebar = () => {
    setShowQr(false);
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
      onClick={() => setShowQr(false)}
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
        <div className="p-6 border-b border-[#E0E0E0] flex items-center justify-between shrink-0">
          <h1 className="text-[20px] font-semibold text-[#1E1E1E] leading-7">
            Event QR
          </h1>

          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-[#6C7788] hover:text-[#1E1E1E]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-3">
          <div className="w-[300px] h-[300px]  flex items-center justify-center overflow-hidden">
            <img
              src="/qr-code.svg"
              alt="Event QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="p-6">
          <button className="w-full h-12 flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-black/90 transition-colors rounded-lg text-white font-medium text-[14px]">
            Download
          </button>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default EventSidebarQR;
