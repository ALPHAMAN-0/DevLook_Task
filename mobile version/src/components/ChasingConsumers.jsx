const consumersImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=f220bffc8303450846250315e3fcb457";

const algorithmsImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=cb2016613a41d1153d28e086f39c0c72";

export default function ChasingConsumers() {
  return (
    <section className="w-full py-0">
      <div className="w-full px-4">
        <div className="grid grid-cols-12 gap-y-3">
          <div className="col-span-12 grid grid-cols-12 gap-x-3 gap-y-3 items-center">
            <div className="col-span-7">
              <h2 className="inline-flex flex-wrap text-balance text-left text-grey-900 text-5xl/[0.95] font-sans-primary font-medium tracking-tight">
                Chasing Consumers
              </h2>
            </div>
            <div className="col-span-5 aspect-square rounded-2xl overflow-hidden bg-grey-200">
              <img
                src={consumersImage}
                alt="Consumers in nature"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-5 aspect-square rounded-2xl overflow-hidden bg-grey-200">
              <img
                src={algorithmsImage}
                alt="Team at work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-7 flex items-center">
              <h2 className="inline-flex flex-wrap text-balance text-left text-grey-900 text-5xl/[0.95] font-sans-primary font-medium tracking-tight">
                Not Algorithms
              </h2>
            </div>
          </div>

          <div className="col-span-12 mt-6">
            <p className="text-sm font-sans-primary leading-normal text-pretty text-grey-900 mb-3">
              People ask us why we are called Rise at Seven? Ever heard the saying
              "Early Bird catches the worm"? Google is moving fast, but humans are
              moving faster. We chase consumers, not algorithms. We've created a
              service which takes ideas to result within 60 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
