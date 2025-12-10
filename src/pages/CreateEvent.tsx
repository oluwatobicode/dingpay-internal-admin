import { useState, useRef } from "react";
import {
  eventSchema,
  type EventFormData,
  type EventFormSchema,
} from "../schema/eventsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useFormStore } from "../store/useFormStore";

import EventDetails from "../components/create-event/EventDetails";
import EventsTickets from "../components/create-event/EventTickets";
import EventsInformation from "../components/create-event/EventsInformation";
import EventQuestions from "../components/create-event/EventQuestions";
import Navbar from "../ui/admin/Navbar";
import Footer from "../ui/admin/Footer";
import EventHeader from "../ui/admin/EventHeader";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const { currentStep } = useFormStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<EventFormSchema, any, EventFormData>({
    resolver: zodResolver(eventSchema),
    mode: "onChange",
    defaultValues: {
      singleTickets: [],
      groupTickets: [],
      questions: [],
    },
  });

  const onSubmit = async (data: EventFormData) => {
    setIsSubmitting(true);
    try {
      console.log("🎉 Final submission:", data);
      // TODO: Replace with actual API call
      // await createEvent(data);

      navigate("/home");
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log("Current form data:", methods.watch());

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <FormProvider {...methods}>
        <form
          ref={formRef}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-7xl">
              <EventHeader />
              <div>
                {currentStep === 1 && <EventDetails />}
                {currentStep === 2 && <EventsTickets />}
                {currentStep === 3 && <EventQuestions />}
                {currentStep === 4 && <EventsInformation />}
              </div>
            </div>
          </div>
          <Footer isSubmitting={isSubmitting} />
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateEvent;
