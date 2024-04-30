import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const navigation = {
  solutions: [
    { name: "SmartLink", href: "/smartlink" },
    { name: "SmartSite", href: "/smartsite" },
    { name: "Reporting", href: "/reporting" },
  ],
  support: [
    { name: "About", href: "/about-us" },
    { name: "News & Events", href: "/cpg-brand-news" },
    { name: "Partners", href: "/partners" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-conditions" },
  ],
  company: [
    { name: "", href: "#" },
    { name: "Blog", href: "/cpg-marketing-blog" },
    { name: "Events", href: "/events" },
    {
      name: "Newsletter",
      href: "/newsletter",
    },
    { name: "White Papers", href: "/whitepapers" },
    { name: "CPG Scoop", href: "/cpg-scoop" },
    { name: "Get Demo", href: "/request-demo" },
  ],
  partners: [
    { name: "Partners", href: "/partners" },
    { name: "Retail Partners", href: "/click2cart-network" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/smartcommerce/mycompany/",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/SmartCommerceCo",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/SmartCommerceCo",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          viewBox="0 0 512 512"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@SmartCommerceco",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;
  return (
    <footer
      className="bg-gradient-to-r from-info-950 to-dark-accent"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="grid md:grid-cols-3 xl:grid xs:grid-cols-3 xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-12 mr-8"
              src="/logo-white.svg"
              alt="Company name"
            />
            <p className="text-sm leading-6 text-gray-300">
              75 5th Street NW, Suite 2000
              <br />
              Atlanta, Georgia 30308
              <br />
              <br />
              1.800.571.3520
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-950 hover:text-secondary-dark-accent"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="mt-4 border-t border-white/10 pt-8 sm:mt-20 lg:mt-0">
                <div className="flex lg:justify-between flex-col">
                  <div className="flex">
                    <Link href="https://www.inc.com/profile/smartcommerce">
                      <img
                        className="h-24 px-4"
                        src="img/inc-logo.svg"
                        alt="Company name"
                      />
                    </Link>
                    <img
                      className="h-24 px-4"
                      src="Best_Workplaces_Badge 1.svg"
                      alt="Company name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-1 lg:mt-0 mt-10">
            <div className="grid grid-cols-2 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Products
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <h3 className="text-sm font-semibold leading-6 text-white mt-10">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <h3 className="text-sm font-semibold leading-6 text-white mt-10">
                  Partners
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.partners.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="xl:col-span-1 lg:mt-0 mt-10">
            <div id="footer">
              <div className="text-white text-xl mb-4 lg:text-xl">
                Be A SmartCookie
              </div>{" "}
              <iframe
                allowtransparency="true"
                src="https://demo.smartcommerce.co/smartcommerce/forms/subscribe-form.html"
                height="500"
                width="100%"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex justify-between flex-col lg:flex-col">
            <div className="flex lg:hidden block mx-auto lg:mx-none">
              <Link href="https://www.inc.com/profile/smartcommerce">
                <img
                  className="h-24 px-4"
                  src="img/inc-logo.svg"
                  alt="Company name"
                />
              </Link>
              <img
                className="h-24 px-4"
                src="Best_Workplaces_Badge 1.svg"
                alt="Company name"
              />
            </div>
            <p className="text-xs leading-5 text-gray-400 lg:mt-0 mt-8 lg:text-start text-center ">
              &copy; 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
