import {Image, Link} from '@shopify/hydrogen';
import gql from 'graphql-tag';

function BoxFallback() {
  return (
    <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900 h-60"></div>
  );
}

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-100 flex justify-center items-center">
          <div className="space-y-5 py-20 px-10 lg:px-0">
            <h1 className="text-4xl xl:text-6xl capitalize tracking-wide">
              The Future{' '}
              <span className="font-bebas">
                of <br className="hidden lg:inline" /> clean
              </span>{' '}
              has arrived
            </h1>
            <p className="text-xl tracking-wider">
              Start off the new year right with our{' '}
              <br className="hidden lg:inline" /> revolutionary, refillable
              cleaners and hand soap
            </p>
            <Link
              to="/collections/all"
              className="bg-blue-600 text-white px-6 py-2 rounded-full inline-block font-bold tracking-wider"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/hero.jpg"
            width="100%"
            height="100%"
            alt="Hero image"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto lg:gap-10 py-10">
        <Image
          src="/images/leftpill.png"
          width="200"
          height="200"
          className="hidden lg:inline-block"
        />
        <div className="text-center space-y-5">
          <h2 className="text-3xl font-medium text-gray-700">How It Works</h2>
          <p className="text-xl md:text-2xl tracking-wide font-light">
            Buy the bottle once. Refill forever. <br /> All without the plastic
            waste.
          </p>
        </div>
        <Image
          src="/images/rightpill.png"
          width="200"
          height="200"
          className="hidden lg:inline-block"
        />
      </div>

      <div className="bg-blue-50 py-28 text-center space-y-20">
        <h2 className="text-4xl font-medium text-gray-700 capitalize">
          You can have it all
        </h2>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-y-5 items-center justify-center">
            <Image
              src="/images/scientificallyproven.png"
              width="100"
              height="100"
            />
            <h4 className="font-medium">Scientifically-Proven Clean</h4>
          </div>
          <div className="flex flex-col gap-y-5 items-center justify-center">
            <Image src="/images/ingredients.png" width="100" height="100" />
            <h4 className="font-medium">Conscious Ingredients</h4>
          </div>
          <div className="flex flex-col gap-y-5 items-center justify-center">
            <Image src="/images/ecofriendly.png" width="100" height="100" />
            <h4 className="font-medium">Earth-Friendly Packaging</h4>
          </div>
          <div className="flex flex-col gap-y-5 items-center justify-center">
            <Image src="/images/refillplant.png" width="100" height="100" />
            <h4 className="font-medium">Refills are $2 or less</h4>
          </div>
        </div>
      </div>

      <div className="py-20 text-center">
        <h1 className="text-4xl font-medium text-gray-700 pb-10">
          Explore Our Products
        </h1>
        <div className="flex gap-y-20 md:gap-y-0 flex-col md:flex-row md:gap-x-20 lg:gap-x-28 xl:gap-x-36 justify-center w-full max-w-5xl mx-auto">
          <div className="space-y-3 flex flex-col items-center justify-center">
            <Image src="/images/starterkits.png" width="400" height="400" />
            <h3 className="text-3xl font-medium text-gray-700 tracking-wide">
              Starter Kits
            </h3>
            <p className="text-base tracking-wide text-gray-600">
              Your new cleaning routine starts here{' '}
            </p>
            <Link
              to="/collections/starter-kits"
              className="text-gray-700 text-lg capitalize px-6 py-2 rounded-full border border-black hover:bg-sky-900 hover:text-white inline-block font-bold tracking-wider"
            >
              Get My kit
            </Link>
          </div>
          <div className="space-y-3 flex flex-col items-center justify-center">
            <Image src="/images/refills.png" width="400" height="400" />
            <h3 className="text-3xl font-medium text-gray-700 tracking-wide">
              Refills
            </h3>
            <p className="text-base tracking-wide text-gray-600">
              Refill to save money and plastic waste{' '}
            </p>
            <Link
              to="/collections/refills"
              className="text-gray-700 text-lg capitalize px-6 py-2 rounded-full border border-black hover:bg-sky-900 hover:text-white inline-block font-bold tracking-wider"
            >
              Get Refills
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-start items-center pb-10 md:pb-0">
          <div
            className="text-center sm:text-left sm:pl-10 space-y-5 max-w-xl
          "
          >
            <p className="uppercase border-b border-pink-400 inline-block font-light">
              Our Mission
            </p>
            <h3 className="text-4xl text-black">A Cleaner Tomorrow</h3>
            <p className="text-xl text-gray-600 tracking-wide">
              We founded Blueland on the belief that a cleaner planet starts at
              home.
            </p>
            <Link to="/our-mission" className="inline-block font-bold ">
              Read More
            </Link>
          </div>
        </div>
        <Image
          src="/images/turtle.jpg"
          width="100%"
          height="100%"
          className="rounded-md px-10 md:px-0"
        />
      </div>
    </div>
  );
}

const QUERY = gql`
  query welcomeContent {
    shop {
      name
    }
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
