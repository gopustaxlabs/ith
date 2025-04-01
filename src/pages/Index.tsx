import { Header } from "@/components/layout/Header";
import { MarketsList } from "@/components/markets/MarketsList";
import { NavigationButtons } from "@/components/navigation/NavigationButtons";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { Sidebar } from "@/components/layout/Sidebar";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      <ProgressBar />
      <main className="w-full max-w-[1266px] mt-[17px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <section className="w-[69%] max-md:w-full max-md:ml-0">
            <div className="z-10 flex mr-[-412px] w-full flex-col self-stretch my-auto max-md:max-w-full max-md:mt-10">
              <div className="self-stretch max-md:max-w-full">
                <h1 className="text-[#1D2939] text-2xl font-semibold leading-none max-md:max-w-full">
                  Pick Markets
                </h1>
                <p className="text-[#344054] text-base font-normal mt-3 max-md:max-w-full">
                  Select the markets you're ready to support with your services.
                </p>
              </div>
              <MarketsList />
              <NavigationButtons />
            </div>
          </section>
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;
