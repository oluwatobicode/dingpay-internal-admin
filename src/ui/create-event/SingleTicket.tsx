import { useFormContext } from "react-hook-form";
import type { EventFormData } from "../../schema/eventsSchema";
import { useState } from "react";

import ToggleSwitch from "./ToggleSwitch";

interface SingleTicketProps {
  onClose?: () => void;
}

const SingleTicket = ({ onClose }: SingleTicketProps) => {
  const { watch, setValue } = useFormContext<EventFormData>();
  const [isFree, setIsFree] = useState<boolean>(false);
  const [setPlatformFee, setIsPlatformFee] = useState<boolean>(false);
  const [isUnlimited, setIsUnlimited] = useState<boolean>(false);
  const [ticketName, setTicketName] = useState<string>("");
  const [ticketDescription, setTicketDescription] = useState<string>("");
  const [perTicketPrice, setPerTicketPrice] = useState<string>("");
  const [ticketLimitPerOrder, setTicketLimitPerOrder] = useState<string>("");
  const [ticketQuantity, setTicketQuantity] = useState<string>("");

  const currentSingleTickets = watch("singleTickets") || [];

  const handlePowerToggle = (state: boolean) => {
    setIsPlatformFee(state);
  };

  const handleToggleFree = (state: boolean) => {
    setIsFree(state);
  };

  const handleToggleUnlimited = (state: boolean) => {
    setIsUnlimited(state);
  };

  const handleAddTicket = () => {
    if (!ticketName.trim()) {
      alert("Please enter a ticket name");
      return;
    }
    if (!ticketDescription.trim()) {
      alert("Please enter a ticket description");
      return;
    }
    if (!isFree && !perTicketPrice) {
      alert("Please enter a ticket price");
      return;
    }
    if (!isUnlimited && !ticketQuantity) {
      alert("Please enter ticket quantity");
      return;
    }
    if (!ticketLimitPerOrder) {
      alert("Please enter ticket limit per order");
      return;
    }

    const newTicket = {
      name: ticketName,
      description: ticketDescription,
      pricePerTicket: isFree ? 0 : parseFloat(perTicketPrice) || 0,
      freeTickets: isFree,
      platformFee: setPlatformFee,
      ticketQuantity: isUnlimited ? 999999 : parseInt(ticketQuantity) || 0,
      unlimitedTicket: isUnlimited,
      ticketPerOrder: parseInt(ticketLimitPerOrder) || 1,
    };

    setValue("singleTickets", [...currentSingleTickets, newTicket]);

    // Close the sidebar
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col space-y-4 h-full">
      <div>
        <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
          Ticket Name <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full text-[16px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
          placeholder="Enter a name for the ticket"
          type="text"
          value={ticketName}
          onChange={(e) => setTicketName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
          Ticket Description
        </label>
        <textarea
          className="w-full px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
          rows={4}
          placeholder="Write here..."
          value={ticketDescription}
          onChange={(e) => setTicketDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-row gap-[24px] items-center justify-between">
          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Price per ticket <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="₦ 0.00"
              type="text"
              value={perTicketPrice}
              onChange={(e) => setPerTicketPrice(e.target.value)}
              disabled={isFree}
            />
          </div>

          <div className="flex flex-row gap-[10px] items-center justify-between">
            <label className="font-medium text-[14px] leading-[16px] tracking-normal">
              is Free
            </label>

            <ToggleSwitch initial={isFree} onToggle={handleToggleFree} />
          </div>
        </div>

        <div className="mt-5 flex flex-row items-center gap-[10px]">
          <h1 className="font-medium text-[14px] leading-[16px] tracking-normal">
            Guests pay the platform fees
          </h1>

          <ToggleSwitch initial={setPlatformFee} onToggle={handlePowerToggle} />
        </div>
      </div>

      <div className="flex flex-row gap-[24px] items-center justify-between">
        <div>
          <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
            Ticket quantity <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
            placeholder="Number of tickets available"
            type="text"
            value={ticketQuantity}
            onChange={(e) => setTicketQuantity(e.target.value)}
            disabled={isUnlimited}
          />
        </div>

        <div className="flex flex-row gap-[10px] items-center justify-center]">
          <p className="font-medium text-sm leading-[16px] tracking-normal">
            is Unlimited
          </p>

          <ToggleSwitch
            initial={isUnlimited}
            onToggle={handleToggleUnlimited}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
          Ticket Per Order <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full text-[16px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
          placeholder="Ticket limit per order"
          type="text"
          value={ticketLimitPerOrder}
          onChange={(e) => setTicketLimitPerOrder(e.target.value)}
        />
      </div>

      <button
        onClick={handleAddTicket}
        type="button"
        className="mt-auto bg-black p-2 rounded-[8px] text-white font-semibold text-[14px] tracking-normal cursor-pointer hover:bg-gray-800 transition-colors"
      >
        Add Ticket
      </button>
    </div>
  );
};
export default SingleTicket;
