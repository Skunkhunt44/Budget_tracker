import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <Link to={"/"}>
          <div className="flex items-center text-2xl">
            <div className="w-12">
              <FaMoneyBillTrendUp />
            </div>
            Budget App
          </div>
        </Link>
        <div className="flex mt-4 sm:mt-0">
          <Link className="px-4" to={"/dashboard"}>
            Dashboard
          </Link>
          <Link className="px-4" to={"#"}>
            Services
          </Link>
          <Link className="px-4" to={"#"}>
            Stats
          </Link>
          <Link className="px-4" to={"#"}>
            Testimonials
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to={"/signup"}
            type="button"
            className=" py-3 px-8 text-sm bg-teal-500 hover:bg-teal-600 rounded text-white "
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
