export default function ShareExperienceSection() {
  return (
    <section data-aos="zoom-in">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="relative border-4 border-black bg-white shadow-[8px_8px_0px_0px_black] p-8 sm:p-10 text-center">
            {/* Corner decoration */}
            <div className="absolute -right-2 -top-2 h-5 w-5 bg-[#1040C0] border-2 border-black rotate-45" />

            <h3 className="font-outfit font-black uppercase tracking-tight text-3xl">
              Share your experience
            </h3>
            <p className="mt-3 font-outfit font-medium leading-relaxed text-base">
              We'd love to feature your story. Send us your testimonial.
            </p>

            <div className="mt-7 flex items-center justify-center gap-3 flex-wrap">
              <a
                href="mailto:pati.dhrubaraj@outlook.com?subject=My%20MultiCalc%20Testimonial&body=Hi%20MultiCalc%20Team%2C%0D%0A%0D%0AHere%20is%20my%20testimonial%3A%0D%0A"
                className="bauhaus-focus-ring inline-flex items-center justify-center border-4 border-black bg-[#1040C0] px-6 py-3 font-outfit font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_black] transition duration-200 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Write testimonial
              </a>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#D02020] border-2 border-black" />
                <span className="h-3 w-3 bg-[#F0C020] border-2 border-black" />
                <span className="h-3 w-3 rounded-full bg-[#1040C0] border-2 border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
