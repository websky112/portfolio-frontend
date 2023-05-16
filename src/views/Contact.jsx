import { useForm } from "react-hook-form";
import { BsEnvelope, BsGeoAlt, BsPhone } from "react-icons/bs";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <div className="w-full flex flex-col items-center p-8 lg:p-12 xl:p-16 pt-28 lg:pt-28 xl:pt-28">
      <h1 className="text-white text-6xl text-center font-bold mb-4">
        Contact
      </h1>
      <p className="text-gray-300 max-w-xl w-full text-center">
        Thank you for your interest in my work. Please use the form below to get
        in touch with me regarding collaboration, employment opportunities, or
        any other inquiries you may have. I will do my best to respond to your
        message in a timely manner. Thank you for taking the time to reach out
      </p>
      <div className="flex my-20 gap-24">
        <div className="flex">
          <div className="w-11 h-11 mt-1 rounded-full flex justify-center items-center bg-green-950">
            <BsGeoAlt className="text-green-400" size={20} />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-gray-400 text-lg font-semibold">Location</p>
            <p className="text-white text-sm">
              117 N Rodney St, Wilmington,
              <br /> DE 19805
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-11 h-11 mt-1 rounded-full flex justify-center items-center bg-green-950">
            <BsEnvelope className="text-green-400" size={20} />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-gray-400 text-lg font-semibold">Email</p>
            <p className="text-white text-sm">tholt7607@gmail.com</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-11 h-11 mt-1 rounded-full flex justify-center items-center bg-green-950">
            <BsPhone className="text-green-400" size={20} />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-gray-400 text-lg font-semibold">Phone</p>
            <p className="text-white text-sm">+15614372202</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 max-w-4xl w-full"
      >
        <div className="flex gap-6">
          <div className="flex-1 flex flex-col gap-1">
            <input
              className="bg-transparent outline-none border border-gray-500 text-sm text-white px-4 py-3 rounded-md"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                Please fill out your name
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <input
              className="bg-transparent outline-none border border-gray-500 text-sm text-white px-4 py-3 rounded-md"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                Please fill out your email
              </span>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <input
            className="bg-transparent outline-none border border-gray-500 text-sm text-white px-4 py-3 rounded-md"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <span className="text-red-600 text-sm">
              Please fill out the subject
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <textarea
            className="bg-transparent outline-none border border-gray-500 text-sm text-white min-h-20 px-4 py-3 rounded-md"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-600 text-sm">
              Please fill out the message
            </span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 py-3 px-6 w-40 text-white rounded-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
