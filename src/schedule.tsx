const Schedule = () => {
  return (
    <div className="w-full min-h-[85vh] bg-white flex flex-col pt-[66px] items-center justify-center px-4 md:px-0">
      <div className="max-w-xl w-full bg-[#f8f8f8] rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 mt-12 mb-12">
        <h1 className="text-[32px] md:text-[40px] poppins-medium text-center text-[#0f1728]">Schedule a Call</h1>
        <p className="be-vietnam-pro-medium text-[#475466] text-[18px] leading-[24.3px] text-center">
          Fill out the form below and we’ll get in touch to schedule a call at your convenience.
        </p>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-[#e5e7eb] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F78B16]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-[#e5e7eb] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F78B16]"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            className="border border-[#e5e7eb] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F78B16]"
          />
          <textarea
            placeholder="How can we help you?"
            className="border border-[#e5e7eb] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F78B16] min-h-[100px]"
            required
          />
          <button
            type="submit"
            className="text-base font-medium text-white bg-[#F78B16] rounded-lg px-6 py-3 hover:bg-[#E67A0A] transition mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule; 