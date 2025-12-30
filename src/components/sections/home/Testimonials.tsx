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
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function TestimonialsSection() {

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-excon font-bold mb-8 text-center">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-500 font-supreme max-w-3xl mx-auto mb-6">
            Here's what our happy user have to say about their experience.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
