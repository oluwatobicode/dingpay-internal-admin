import { useState } from "react";
import { eventSchema, type EventFormData } from "../schema/eventsSchema";
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

const CreateEvent = () => {
  const { currentStep } = useFormStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<EventFormData>({
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
      console.log(data);
      // await createEvent(data);
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl">
      <FormProvider {...methods}>
        <Navbar />
        <EventHeader />
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
