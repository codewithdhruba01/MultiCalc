import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/magicui/marquee"

const reviews = [
  {
    name: "Abhishek Rajput",
    username: "Developer @BMC Software ",
    body: "This website is good in terms of functionality. The only thing you can improve is the theme. Overall the experience is good and smooth.",
    img: "/testimoni/img1.jpeg",
  },
  {
    name: "Jaanvi Chouhan",
    username: "@Student",
    body: "MultiCalc is really impressive! I found it very useful, and I love the clean and simple design it makes everything easy to use.",
    img: "/testimoni/img2.jpeg",
  },
  {
    name: "Sanskruti D",
    username: "@Student",
    body: "I was very impressed with the MultiCal website. It offers a truly comprehensive suite of tools, incredibly fast and responsive.",
    img: "/testimoni/img3.jpeg",
  },
  {
    name: "Janani M",
    username: "@ZOHO",
    body: "I have used the Multicalc platform. It is very smooth to use. It had wide range of calculators. With a Sleek UI and smooth UX.",
    img: "/testimoni/img4.jpeg",
  },
  {
    name: "Priyadharshini S",
    username: "@ZOHO",
    body: "I went through your Multicalc project, its really amazing in terms of both UI and functionality. Kudos to the team!",
    img: "/testimoni/img6.jpeg",
  },
  {
    name: "Aishika Biswas",
    username: "@Mekyek",
    body: "MultiCalc calculator site is a full package, for someone who needs every calculation at one place. The UI is simple and easy to use.",
    img: "/testimoni/img7.jpeg",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
  variant,
}: {
  img: string
  name: string
  username: string
  body: string
  variant: number
}) => {
  const avatarShape = variant % 2 === 0 ? "rounded-full" : "rounded-none"
  const deco =
    variant % 3 === 0 ? "#D02020" : variant % 3 === 1 ? "#1040C0" : "#F0C020"

  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden border-4 border-black bg-white p-5",
        "text-black shadow-[8px_8px_0px_0px_black] transition duration-200 ease-out hover:-translate-y-1"
      )}
    >
      <div
        className="absolute -right-2 -top-2 h-5 w-5 border-2 border-black"
        style={{
          background: deco,
          borderRadius: variant % 3 === 0 ? "9999px" : undefined,
          transform: variant % 3 === 1 ? "rotate(45deg)" : undefined,
        }}
      />
      <div className="flex flex-row items-center gap-2">
        <img
          className={cn(
            "h-10 w-10 border-2 border-black bg-[#F0F0F0] object-cover grayscale transition duration-200 ease-out hover:grayscale-0",
            avatarShape
          )}
          width="40"
          height="40"
          alt=""
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-black uppercase tracking-wide font-outfit">
            {name}
          </figcaption>
          <p className="text-xs font-bold uppercase tracking-widest opacity-70 font-outfit">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed font-outfit font-medium text-black">
        {body}
      </blockquote>
    </figure>
  )
}

export default function TestimonialsSection() {

  return (
    <section className="border-b-4 border-black bg-[#1040C0] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-outfit font-bold uppercase tracking-widest text-xs text-white/90">
              Testimonials
            </p>
            <h2 className="mt-3 font-outfit font-black uppercase tracking-tighter leading-[0.95] text-4xl sm:text-6xl">
              What our users say
            </h2>
          </div>
          <p className="max-w-xl font-outfit font-medium text-base sm:text-lg leading-relaxed text-white/90">
            Real feedback from real people—rolling across like a moving poster strip.
          </p>
        </div>

        <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, i) => (
              <ReviewCard key={review.username} {...review} variant={i} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, i) => (
              <ReviewCard
                key={review.username}
                {...review}
                variant={i + firstRow.length}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
