import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface PayoutSidebarProps {
  setShowPayoutSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  availableBalance?: string;
  bankName?: string;
  accountNumber?: string;
  accountName?: string;
}

const EventPayoutSidebar = ({
  setShowPayoutSidebar,
  availableBalance = "₦849,150",
  bankName = "First Bank",
  accountNumber = "009012345",
  accountName = "TedX Bowen University",
}: PayoutSidebarProps) => {
  const { register, handleSubmit } = useForm<{ amount: string }>();

  const close = () => setShowPayoutSidebar(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const onSubmit = (data: { amount: string }) => {
    console.log("Request payout", data);
    setShowPayoutSidebar(false);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={close}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end h-screen"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="h-screen w-[510px] bg-white flex flex-col  shadow-2xl"
      >
        <div className="p-6 border-b border-[#E0E0E0] flex items-center justify-between shrink-0 bg-white">
          <h1 className="text-[20px] font-semibold text-[#1E1E1E] leading-7">
            Request Payout
          </h1>
          <button
            onClick={close}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-[#6C7788] hover:text-[#1E1E1E]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between h-full  gap-4"
          >
            <div>
              <label className="text-[14px] font-medium text-black leading-4 tracking-normal">
                Amount <span className="text-red-500">*</span>
              </label>

              <input
                {...register("amount", { required: true })}
                type="text"
                placeholder="Enter amount"
                className="w-full h-10 rounded-lg border border-[#E9E9E9] pl-4 pr-4 outline-none focus:border-gray-400"
              />
              <div className="text-[14px] mt-5 leading-5 tracking-normal font-medium text-[#6C7788]">
                Available balance: <span>{availableBalance}</span>
              </div>
            </div>

            <div>
              <div className="bg-[#EFEFEF] p-4 rounded-xl mt-5">
                <p className="text-[14px] font-medium text-[#000000] mb-3">
                  Your money will be paid out to
                </p>

                <div className="flex justify-between py-1">
                  <p className="text-[13px] text-[#A0A7B4]">Bank name</p>
                  <p className="text-[13px] text-[#000000]">{bankName}</p>
                </div>

                <div className="flex justify-between py-1">
                  <p className="text-[13px] text-[#A0A7B4]">Account number</p>
                  <p className="text-[13px] text-[#000000]">{accountNumber}</p>
                </div>

                <div className="flex justify-between py-1">
                  <p className="text-[13px] text-[#A0A7B4]">Account name</p>
                  <p className="text-[13px] text-[#000000]">{accountName}</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-black/90 transition-colors rounded-lg text-white font-medium text-[14px] mt-4"
              >
                Request payout
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default EventPayoutSidebar;
