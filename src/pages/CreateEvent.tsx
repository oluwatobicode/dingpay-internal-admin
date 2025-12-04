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
      console.log("🎉 Final submission:", data); // Check console - you'll see ALL data
      // TODO: Replace with actual API call
      // await createEvent(data);

      navigate("/home");
    } catch (error) {
      console.error("Error creating event:", error);
      // You can add error handling/notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add this to see data changes in real-time
  console.log("Current form data:", methods.watch());

  return (
    <main className="mx-auto max-w-7xl">
      <FormProvider {...methods}>
        <Navbar />
        <EventHeader />
        <form ref={formRef} onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            {currentStep === 1 && <EventDetails />}
            {currentStep === 2 && <EventsTickets />}
            {currentStep === 3 && <EventQuestions />}
            {currentStep === 4 && <EventsInformation />}
          </div>
          <Footer isSubmitting={isSubmitting} />
        </form>
      </FormProvider>
    </main>
  );
};

export default CreateEvent;
