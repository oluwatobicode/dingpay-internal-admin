import { useFormStore } from "../../store/useFormStore";

const EventHeader = () => {
  const { currentStep } = useFormStore();

  const steps = [
    { number: 1, label: "Event details" },
    { number: 2, label: "Tickets" },
    { number: 3, label: "Questions" },
    { number: 4, label: "Additional information" },
  ];

  return (
    <div className="w-full min-w-5xl">
      <div className="max-w-screen-2xl mx-auto px-10 py-8 flex flex-col gap-[24px]">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-semibold leading-[100%] -tracking-[1.5%]">
            Create Event
          </h1>

          <div>
            <button className="w-[70px] h-[32px] rounded-[8px] cursor-pointer text-[14px] border border-[#E9E9E9] hover:bg-gray-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>

        <div className="flex items-center">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`flex items-center gap-3 px-6 py-1.5 rounded-full transition-all ${
                  currentStep === step.number
                    ? "bg-[#2F80ED] text-white"
                    : currentStep > step.number
                    ? "bg-gray-100 text-gray-700"
                    : "bg-white text-gray-400 border border-gray-200"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-6 h-6 border rounded-full font-regular text-[14px] ${
                    currentStep === step.number
                      ? "border-white text-white"
                      : "border-[#A0A7B4] text-[#A0A7B4]"
                  }`}
                >
                  {step.number}
                </span>
                <span className="font-regular text-[14px]">{step.label}</span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`w-8 h-[2px]  ${
                    currentStep > step.number ? "bg-gray-300" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
