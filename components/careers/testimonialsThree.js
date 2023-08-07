import Button from "/components/elements/Button";
export default function TestimonialsThree() {
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8 bg-white">
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute" />
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                I used to think that a great company to work for revolved around
                what the salary was like and how much vacation time I could get.
                Eventually I learned that it was about a whole lot more, such as
                the company culture, opportunities to learn & grow, training
                availability and the inspiration you can get from your peers.
              </p>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <img
              className="rounded-xl bg-indigo-50 lg:rounded-3xl"
              src="testimonial-victoria.jpg"
              alt=""
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="font-semibold text-secondary-950">
              Victoria Benwell
            </div>
            <div className="mt-1 text-gray-500">VP Data Optimization</div>
          </figcaption>
        </figure>
        <div class="flex flex-row-reverse ...">
          <div className="mt-8">
            {" "}
            <Button
              title="Click to cart my favorite snacks"
              link="https://2cart.net/03500Ar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
