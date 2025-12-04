import type { EventFormData } from "../../schema/eventsSchema";
import { useFormStore } from "../../store/useFormStore";
import { useFormContext } from "react-hook-form";

interface FooterProps {
  isSubmitting: boolean;
}

const Footer = ({ isSubmitting }: FooterProps) => {
  const { currentStep, nextStep, prevStep } = useFormStore();
  const { trigger, watch, setError, clearErrors } =
    useFormContext<EventFormData>();

  const handleNext = async () => {
    // Special handling for step 2 - need to validate the refine rule
    if (currentStep === 2) {
      const singleTickets = watch("singleTickets") || [];
      const groupTickets = watch("groupTickets") || [];

      // Check if at least one ticket exists (refine rule check)
      if (singleTickets.length === 0 && groupTickets.length === 0) {
        // Manually set the error that matches the refine rule
        setError("singleTickets", {
          type: "manual",
          message: "Please create at least one ticket (single or group)",
        });
        return;
      }

      // Clear the error if tickets exist
      clearErrors("singleTickets");

      // If tickets exist, allow progression
      // Individual ticket validation happens when tickets are created
      nextStep();
    } else {
      const fieldsToValidate = getFieldsForStep(currentStep);
      const isValid = await trigger(fieldsToValidate);

      if (isValid) {
        nextStep();
      }
    }
  };

  const isLastStep = currentStep === 4;
  const isFirstStep = currentStep === 1;

  return (
    <footer className="w-full min-w-5xl border-t border-[#E9E9E9] bg-white">
      <div className="max-w-screen-2xl mx-auto px-12 py-6 flex justify-end">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={prevStep}
            disabled={isFirstStep}
            className="px-3.5 py-2 border border-[#E9E9E9] rounded-lg text-sm font-medium text-[#344054] cursor-pointer hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            type={isLastStep ? "submit" : "button"}
            onClick={isLastStep ? undefined : handleNext}
            disabled={isSubmitting}
            className="px-3.5 py-2 border bg-black rounded-lg text-sm font-medium text-white cursor-pointer transition-colors disabled:opacity-50"
          >
            {isLastStep ? (isSubmitting ? "Creating..." : "Finish") : "Next"}
          </button>
        </div>
      </div>
    </footer>
  );
};

// Helper function to determine which fields to validate per step
const getFieldsForStep = (step: number): (keyof EventFormData)[] => {
  switch (step) {
    case 1:
      return [
        "eventName",
        "eventDescription",
        "organizerName",
        "venue",
        "startDate",
        "startTime",
        "endDate",
        "endTime",
      ];
    case 2:
      return ["singleTickets", "groupTickets"];
    case 3:
      return [];
    case 4:
      return [
        "supportContactName",
        "supportContactNumber",
        "supportContactEmail",
      ];
    default:
      return [];
  }
};

export default Footer;
