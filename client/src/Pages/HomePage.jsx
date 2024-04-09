import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">We are Back.</span>
              <Link
                to={"#"}
                target="_blank"
                className="font-semibold text-lime-600"
              >
                <span className="absolute inset-0"></span> Read the update{" "}
                <span>→</span>
              </Link>
            </p>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Manage your Finances with Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Budget App, the easiest way to take control of your
              finances. With our simple and intuitive budget tracker, you can
              easily track your income, expenses, and savings goals all in one
              place. Say goodbye to complicated spreadsheets and start managing
              your money effortlessly. Start tracking your budget today and take
              the first step towards financial freedom.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"#"}
                className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
              >
                Check out the demo
              </Link>
              <Link
                to={"#"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more
                <span>→</span>
              </Link>
            </div>
          </div>
          <div className="mt-10 flow-root sm:mt-20">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://img.freepik.com/free-photo/workplace-team-cooperation-businesswoman-laptop-office_1418-44.jpg?t=st=1712679887~exp=1712683487~hmac=c7247768dde02db656e1e91e3db2e27a70253b7d918e829a9a65e3a8b1c7ba24&w=900"
                width="2432"
                height="1442"
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
