import Button from "/components/elements/Button";
export default function Testimonials() {
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
        <div className="absolute" />
        <div className="absolute" />
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-lg font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                I love working for SmartCommerce! When there’s an issue to
                resolve, everyone who can help jumps in to lend a hand because
                we share the common goal of wanting to deliver the best product
                for our customers.
              </p>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <img
              className="rounded-xl bg-indigo-50 lg:rounded-3xl"
              src="testimonials_jp.jpg"
              alt=""
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="font-semibold text-secondary-950">JP PICKEL</div>
            <div className="mt-1 text-gray-500">SVP, Product Management</div>
          </figcaption>
        </figure>
        <div class="flex flex-row-reverse ...">
          <div className="mt-8">
            {" "}
            <Button
              title="Click to cart my favorite snacks"
              link="https://2cart.net/03500Wl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
