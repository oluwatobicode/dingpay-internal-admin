import { useState } from "react";

type ToggleProps = {
  initial?: boolean;
  onToggle?: (state: boolean) => void;
};

const ToggleSwitch = ({ initial = false, onToggle }: ToggleProps) => {
  const [enabled, setEnabled] = useState(initial);

  const handleToggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-[#1884F6]" : "bg-[#F0F2F5]"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      ></span>
    </button>
  );
};
export default ToggleSwitch;
