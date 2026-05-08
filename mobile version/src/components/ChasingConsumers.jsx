const consumersImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=f220bffc8303450846250315e3fcb457";

const algorithmsImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=cb2016613a41d1153d28e086f39c0c72";

const items = [
  { type: "text", value: "Chasing Consumers" },
  { type: "image", value: consumersImage, alt: "Consumers in nature" },
  { type: "text", value: "Not Algorithms" },
  { type: "image", value: algorithmsImage, alt: "Team at work" },
];

export default function ChasingConsumers() {
  return (
    <section className="w-full py-0">
      <div className="w-full">
        <div className="overflow-hidden w-full">
          <div className="marquee-track items-center gap-x-6 py-2">
            {Array.from({ length: 4 }).map((_, copyIdx) => (
              <div
                key={copyIdx}
                className="shrink-0 flex items-center gap-x-6 pr-6"
              >
                {items.map((item, i) =>
                  item.type === "text" ? (
                    <h2
                      key={i}
                      className="shrink-0 text-grey-900 text-6xl/[0.9] font-sans-primary font-medium tracking-tight whitespace-nowrap"
                    >
                      {item.value}
                    </h2>
                  ) : (
                    <div
                      key={i}
                      className="shrink-0 rounded-2xl overflow-hidden w-[28vw] aspect-square bg-grey-200"
                    >
                      <img
                        src={item.value}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

  
      </div>
    </section>
  );
}
