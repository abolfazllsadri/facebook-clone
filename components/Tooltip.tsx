type TooltipPosition = "top" | "bottom" | "left" | "right";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  position?: TooltipPosition;
  fontSize?: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl";
};

const positionClasses = {
  top: "bottom-4/5 left-1/2 mb-2 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
};

function Tooltip({
  children,
  content,
  position = "bottom",
  fontSize = "text-xs",
}: TooltipProps) {
  return (
    <div className="group relative z-200 inline-flex" aria-label={content}>
      {children}
      <p
        className={`pointer-events-none absolute rounded-xl bg-black/85 px-3 py-2 ${fontSize} font-normal whitespace-nowrap text-gray-50 opacity-0 transition delay-150 duration-150 group-hover:opacity-100 ${positionClasses[position]}`}
      >
        {content}
      </p>
    </div>
  );
}

export default Tooltip;
