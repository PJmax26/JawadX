import { servicesList } from "../../Data";

const Service = () => {
  return (
    <section id="service">
      <h3 className="text-center">
        My <span className="text-orange">Services</span>
      </h3>
      <h1 className="hlg text-center">What I Have To Offer</h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {servicesList.map(({ id, title, desc }) => (
          <div
            key={id}
            className="bg-indigo_dark border-2 text-gray-500 hover:text-gray-300 hover:border-grey border-indigo_dark transition_ease p-10"
          >
            <h1 className="hxl">{title}</h1>
            <p className="mt-5">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
