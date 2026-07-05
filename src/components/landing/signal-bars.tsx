type SignalBarsProps = {
  /** Set size and color at the call site, e.g. "h-4 text-accent". */
  className?: string;
};

const BAR_HEIGHTS = [35, 58, 80, 100] as const;

export function SignalBars({ className }: SignalBarsProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-end gap-[2px] ${className ?? ""}`}
    >
      {BAR_HEIGHTS.map((height) => (
        <span
          key={height}
          className="w-[3px] rounded-[1px] bg-current"
          style={{ height: `${height}%` }}
        />
      ))}
    </span>
  );
}
