import { cn } from "@/lib/utils";

interface MarketChipProps {
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

export const MarketChip: React.FC<MarketChipProps> = ({
  name,
  selected = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "self-stretch border gap-2.5 whitespace-nowrap px-5 py-1 rounded-[30px] border-solid text-sm font-normal leading-none",
        selected
          ? "border-[#53B1FD] bg-[#D1E9FF] text-[#1849A9]"
          : "border-[#E4E7EC] text-[#1D2939]",
      )}
      role="checkbox"
      aria-checked={selected}
    >
      {name}
    </button>
  );
};
