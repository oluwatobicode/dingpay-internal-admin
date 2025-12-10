import { useFormContext, Controller } from "react-hook-form"; // 1. Import Controller
import type { EventFormData } from "../../schema/eventsSchema";
import RichTextEditor from "../../ui/create-event/RichTextEditor";

const EventDetails = () => {
  const {
    register,
    control, // 2. Destructure control (needed for Controller)
    formState: { errors },
    watch,
  } = useFormContext<EventFormData>();

  const eventImage = watch("eventImage");

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Event Name <span className="text-[#FF0000]">*</span>
            </label>
            <input
              {...register("eventName")}
              className="w-full px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="Event name"
            />
            {errors.eventName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.eventName?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Event Description <span className="text-[#FF0000]">*</span>
            </label>

            <Controller
              name="eventDescription"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RichTextEditor
                  value={value || ""}
                  onChange={onChange}
                  placeholder="Event description"
                />
              )}
            />

            {errors.eventDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.eventDescription.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Organiser Name <span className="text-[#FF0000]">*</span>
            </label>
            <input
              {...register("organizerName")}
              className="w-full px-3 py-2 h-[40px] border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="Organiser Name"
            />
            {errors.organizerName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.organizerName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Venue <span className="text-[#FF0000]">*</span>
            </label>
            <input
              {...register("venue")}
              className="w-full px-3 py-2  h-[40px] border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="Venue"
            />
            {errors.venue && (
              <p className="text-red-500 text-sm mt-1">
                {errors.venue.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
                Start Date <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="date"
                {...register("startDate")}
                className="w-full px-3 py-2 border  h-[40px] border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
                placeholder="Start date"
              />
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startDate.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
                Start Time <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="time"
                {...register("startTime")}
                className="w-full px-3 py-2 border  h-[40px] border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
                placeholder="Start time"
              />
              {errors.startTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startTime.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
                End Date <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="date"
                {...register("endDate")}
                className="w-full px-3 py-2 border  h-[40px] border-[#D4DAE3]  rounded-[12px] outline-none focus:border-gray-400"
                placeholder="End date"
              />
              {errors.endDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.endDate.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
                End Time <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="time"
                {...register("endTime")}
                className="w-full px-3 py-2 border  h-[40px] border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
                placeholder="End time"
              />
              {errors.endTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.endTime.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="relative flex flex-col w-full max-w-[396px] h-[300px] items-center justify-center rounded-lg border border-[#D4DAE3] overflow-hidden bg-gray-50">
            {eventImage?.[0] ? (
              <img
                src={URL.createObjectURL(eventImage[0])}
                alt="Event preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-gray-400 p-6">
                <p>No image uploaded</p>
              </div>
            )}
          </div>

          <label className="w-full max-w-[396px] flex items-center justify-center gap-2 h-[46px] rounded-[63px] mt-4 border border-black text-black cursor-pointer hover:bg-gray-50 transition-colors">
            Upload Image
            <input
              type="file"
              {...register("eventImage")}
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
