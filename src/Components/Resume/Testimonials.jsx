import Pic1 from "../../asserts/pic-1.jpg";
import Pic2 from "../../asserts/pic-2.jpg";
import { TbStarFilled } from "react-icons/tb";

const Testimonials = ({ active }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        active === "testimonial" ? "block" : "hidden"
      }`}
    >
      <div className="p-2 sm:p-5">
        <div className="flex justify-between align-middle mb-3">
          <div className="flex align-center space-x-2">
            <img id="tes_pic" src={Pic1} alt="" />
            <div>
              <h1 className="hlg">Einus Abukari</h1>
              <p className="text-gray-500">Software Lead, @Matrix Ark</p>
            </div>
          </div>
          <div className="flex align-center space-x-2">
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquam
          nobis, distinctio minus molestias velit possimus? Ipsam assumenda sit
          error.
        </p>
      </div>
      <div className="p-2 sm:p-5">
        <div className="flex justify-between align-middle mb-3">
          <div className="flex align-center space-x-2">
            <img id="tes_pic" src={Pic2} alt="" />
            <div>
              <h1 className="hlg">Clinton Anani</h1>
              <p className="text-gray-500">CEO, @3Farmate</p>
            </div>
          </div>
          <div className="flex align-center space-x-2">
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquam
          nobis, distinctio minus molestias velit possimus? Ipsam assumenda sit
          error.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
