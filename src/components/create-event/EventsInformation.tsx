import { useFormContext } from "react-hook-form";
import type { EventFormData } from "../../schema/eventsSchema";

const EventsInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<EventFormData>();

  return (
    <div className="p-10">
      <div className="w-full max-w-[828px] space-y-4">
        <div>
          <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
            Support contact name <span className="text-[#FF0000]">*</span>
          </label>
          <input
            {...register("supportContactName")}
            className="w-full px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
            placeholder="Support contact name"
          />
          {errors.supportContactName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.supportContactName.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Support contact phone number{" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              {...register("supportContactNumber")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="Support contact phone number"
            />
            {errors.supportContactNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.supportContactNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Support contact email address{" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              {...register("supportContactEmail")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="Support contact email address"
            />
            {errors.supportContactEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.supportContactEmail?.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
            Promotional Text
          </label>
          <textarea
            {...register("promotionalText")}
            className="w-full px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
            rows={4}
            placeholder="Promotional Text"
          />
          {errors.promotionalText && (
            <p className="text-red-500 text-sm mt-1">
              {errors.promotionalText?.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Website
            </label>
            <input
              type="text"
              {...register("website")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="Website"
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1">
                {errors.website.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Instagram
            </label>
            <input
              type="text"
              {...register("instagram")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="instagram"
            />
            {errors.instagram && (
              <p className="text-red-500 text-sm mt-1">
                {errors.instagram.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              X (formerly Twitter)
            </label>
            <input
              type="text"
              {...register("twitter")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="X (formerly Twitter)"
            />
            {errors.twitter && (
              <p className="text-red-500 text-sm mt-1">
                {errors.twitter.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              TikTok
            </label>
            <input
              type="text"
              {...register("tiktok")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="TikTok"
            />
            {errors.tiktok && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tiktok.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              LinkedIn
            </label>
            <input
              type="text"
              {...register("linkedin")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="LinkedIn"
            />
            {errors.linkedin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.linkedin.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm leading-4 tracking-normal font-medium mb-[10px]">
              Facebook
            </label>
            <input
              type="text"
              {...register("facebook")}
              className="w-full h-[40px] px-3 py-2 border border-[#D4DAE3] rounded-[12px] outline-none focus:border-gray-400"
              placeholder="facebook"
            />
            {errors.facebook && (
              <p className="text-red-500 text-sm mt-1">
                {errors.facebook.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsInformation;
