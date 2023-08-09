import Button from "/components/elements/Button";
export default function Testimonials() {
  return (
    <>
      <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-4xl px-8">
          <div class="grid grid-cols-1 lg:grid-cols-6 gap-12">
            <div className="col-span-1 lg:col-span-2 text-center">
              <img
                className="rounded-full mx-auto"
                src="img/avatar-jp.png"
                alt=""
              />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  I love working for SmartCommerce! When there’s an issue to
                  resolve, everyone who can help jumps in to lend a hand because
                  we share the common goal of wanting to deliver the best
                  product for our customers.
                </p>
              </blockquote>
              <figcaption className="text-base mt-8">
                <div className="font-semibold text-secondary-950">
                  JP PICKEL
                </div>
                <div className="mt-1 text-gray-500">
                  SVP, Product Management
                </div>
              </figcaption>
              <div class="flex">
                <div className="mt-10 mx-auto">
                  {" "}
                  <Button
                    title="Click to cart my favorite snacks"
                    link="https://2cart.net/03500Wl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="isolate overflow-hidden bg-slate-50 px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-4xl px-8">
          <div class="grid grid-cols-1 lg:grid-cols-6 gap-12">
            <div className="col-span-1 lg:col-span-2 text-center">
              <img
                className="rounded-full mx-auto"
                src="img/avatar-brandon.png"
                alt=""
              />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  The company has a huge emphasis on taking care of our clients,
                  The company has a huge emphasis on taking care of our clients,
                  by providing the best user experience and making sure our
                  products are the right fit for their needs. More importantly,
                  they care about their employees.
                </p>
              </blockquote>
              <figcaption className="text-base mt-8">
                <div className="font-semibold text-secondary-950">
                  Brandon Payne
                </div>
                <div className="mt-1 text-gray-500">
                  Technical Client Support Specialist
                </div>
              </figcaption>
              <div class="flex">
                <div className="mt-10 mx-auto">
                  {" "}
                  <Button
                    title="Click to cart my favorite snacks"
                    link="https://2cart.net/03500WB"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-4xl px-8">
          <div class="grid grid-cols-1 lg:grid-cols-6 gap-12">
            <div className="col-span-1 lg:col-span-2 text-center">
              <img
                className="rounded-full mx-auto"
                src="img/avatar-victoria.png"
                alt=""
              />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  I used to think that a great company to work for revolved
                  around what the salary was like and how much vacation time I
                  could get. Eventually I learned that it was about a whole lot
                  more, such as the company culture, opportunities to learn &
                  grow, training availability and the inspiration you can get
                  from your peers.
                </p>
              </blockquote>
              <figcaption className="text-base mt-8">
                <div className="font-semibold text-secondary-950">
                  Victoria Benwell
                </div>
                <div className="mt-1 text-gray-500">VP Data Optimization</div>
              </figcaption>
              <div class="flex">
                <div className="mt-10 mx-auto">
                  {" "}
                  <Button
                    title="Click to cart my favorite snacks"
                    link="https://2cart.net/03500Ar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
