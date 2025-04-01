
export const Sidebar = () => {
  return (
    <aside className="w-[31%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex flex-col relative min-h-[699px] grow whitespace-nowrap pt-[60px] pb-[648px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9bde8846402c41368b27087f278e8098/ce2316707a753c77bfbb043016ef14d32845d787?placeholderIfAbsent=true"
          alt="Partner Onboarding Background"
          className="absolute h-full w-full object-cover inset-0 max-md:hidden"
        />
        <div className="relative max-md:hidden">
          <div className="text-[#1D2939] text-base font-semibold">Partner</div>
          <div className="text-[#475467] text-xs font-normal">ONBOARDING</div>
        </div>
      </div>
    </aside>
  );
};
