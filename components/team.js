import HeadingOne from "../components/elements/HeadingOne";

const people = [
  {
    name: "Jennifer Silverberg",
    role: "Chief Executive Officer",
    imageUrl:
      "https://smartcommerce.com/wp-content/uploads/2021/10/Jennifer_Silverberg.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rob Sefick",
    role: "Chief Technology Officer",
    imageUrl:
      "https://smartcommerce.com/wp-content/uploads/2021/10/Rob_Sefick.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Russell Caldwell",
    role: "Chief Data Office",
    imageUrl:
      "https://smartcommerce.com/wp-content/uploads/2021/10/Russ_Caldwell.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Don Knapp",
    role: "EVP, Partnerships",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },

  // More people...
];

export default function Team() {
  return (
    <div className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <HeadingOne title="Our Leadership" />
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Your international SmartCommerce team has decades of experience in
            CPG eCommerce (it’s our passion), and would love the opportunity to
            show you what our next-gen eCommerce tools could be doing for your
            brand!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="mx-auto h-56 w-56 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-8 text-info-950">
                {person.name}
              </h3>
              <p className="text-sm leading-8 text-secondary-950">
                {person.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
