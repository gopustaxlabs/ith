export const NavigationButtons = () => {
  return (
    <div className="flex gap-2 text-sm font-medium whitespace-nowrap leading-none mt-[246px] max-md:mt-10">
      <button
        className="flex items-center text-[#667085] justify-center rounded-md hover:bg-gray-50 transition-colors"
        type="button"
      >
        <span className="self-stretch gap-2 overflow-hidden my-auto px-3.5 py-2 rounded-lg">
          Previous
        </span>
      </button>
      <button
        className="self-stretch shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#0152FB] gap-2 overflow-hidden text-white px-3.5 py-2 rounded-md hover:bg-[#0143d1] transition-colors"
        type="button"
      >
        Next
      </button>
    </div>
  );
};
