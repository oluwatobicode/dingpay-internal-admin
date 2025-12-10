import { useFormContext } from "react-hook-form";
import type { EventFormData } from "../../schema/eventsSchema";
import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import RichTextEditor from "./RichTextEditor"; // Import here

interface GroupTicketProps {
  onClose?: () => void;
}

const GroupTickets = ({ onClose }: GroupTicketProps) => {
  useEffect(() => {
    const prev = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const { watch, setValue } = useFormContext<EventFormData>();
  const [isFree, setIsFree] = useState<boolean>(false);
  const [setPlatformFee, setIsPlatformFee] = useState<boolean>(false);
  const [isUnlimited, setIsUnlimited] = useState<boolean>(false);
  const [ticketName, setTicketName] = useState<string>("");

  // HTML Content State
  const [ticketDescription, setTicketDescription] = useState<string>("");

  const [perTicketPrice, setPerTicketPrice] = useState<string>("");
  const [ticketQuantity, setTicketQuantity] = useState<string>("");
  const [groupSize, setGroupSize] = useState<string>("");

  const currentGroupTickets = watch("groupTickets") || [];

  const handlePowerToggle = (state: boolean) => setIsPlatformFee(state);
  const handleToggleFree = (state: boolean) => setIsFree(state);
  const handleToggleUnlimited = (state: boolean) => setIsUnlimited(state);

  const handleAddTicket = () => {
    if (!ticketName.trim()) {
      alert("Please enter a ticket name");
      return;
    }
    // Validation: Strip HTML to ensure they didn't just type spaces
    if (!ticketDescription.replace(/<[^>]*>/g, "").trim()) {
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
    if (!groupSize) {
      alert("Please enter ticket limit per order");
      return;
    }

    const newTicket = {
      name: ticketName,
      description: ticketDescription, // Sends HTML string
      pricePerTicket: isFree ? 0 : parseFloat(perTicketPrice) || 0,
      freeTickets: isFree,
      platformFee: setPlatformFee,
      ticketQuantity: isUnlimited ? 999999 : parseInt(ticketQuantity) || 0,
      unlimitedTicket: isUnlimited,
      groupSize: parseInt(groupSize) || 1,
    };

    setValue("groupTickets", [...currentGroupTickets, newTicket]);

    // Reset fields
    setTicketName("");
    setTicketDescription(""); // Reset editor
    setPerTicketPrice("");
    setTicketQuantity("");
    setGroupSize("");
    setIsFree(false);
    setIsPlatformFee(false);
    setIsUnlimited(false);

    alert("Ticket added successfully!");

    if (onClose) onClose();
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

        <RichTextEditor
          value={ticketDescription}
          onChange={setTicketDescription}
          placeholder="Write here..."
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
              type="number"
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
            type="number"
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
          Group size <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full text-[16px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
          placeholder="Number of people in group"
          type="number"
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
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

export default GroupTickets;
