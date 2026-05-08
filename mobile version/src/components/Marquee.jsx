export default function Marquee({ items, className = "", speed = 28 }) {
  const doubled = items.concat(items);
  return (
    <div
      className={`overflow-hidden marquee-mask w-full ${className}`}
      aria-hidden="true"
    >
      <div
        className="marquee-track gap-x-8"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-base font-medium text-grey-900 shrink-0 font-sans-primary tracking-tight whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
