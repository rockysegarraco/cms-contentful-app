import Video from "../components/Video";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
	 // ...
	 plugins: [
		// ...
		require('@tailwindcss/forms'),
	 ],
  }
  ```
*/
export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2 ">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full "
          src="/img/cta-getdemo.jpg"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="mb-4">
              <Video />
            </div>
            <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[5rem]  mb-1 font-bold text-info-950">
              Request a Demo
              <span className="text-secondary-950">.</span>
            </h1>
            <p className="mt-1 text-lg leading-8 text-gray-600">
              Interested in learning how Click2Cart® can drive e- commerce from
              your digital ads, social channels and website - or would you like
              to see a sample link for your brand? Please introduce yourself
              below, and one our team members will be right back with you!
            </p>
          </div>
          <form className="mt-8">
              <iframe
                src="https://tfaforms.com/4988154"
                height="700"
                width="100%"
                frameborder="0"
              ></iframe>
            </form>
            <div id="fa-form"></div>
        </div>
      </div>
    </div>
  );
}
