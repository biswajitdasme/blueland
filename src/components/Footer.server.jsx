import {Link} from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-200 to-blue-200"></div>
      <div className="p-12 bg-blue-800 text-white grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="w-full sm:max-w-lg space-y-3 ">
            <h3 className="text-3xl font-medium">
              Our emails are zero waste too
            </h3>
            <p className="tracking-wide">
              Subscribe to get exclusive deals, zero waste tips, and product
              launches—no spam, no waste.
            </p>
            <div className="flex bg-white rounded-full">
              <input
                type="email"
                className="py-3 px-5 rounded-l-full w-full text-2xl text-gray-600 focus:outline-none"
                placeholder="Enter Email"
              />
              <button className="px-10 py-2 rounded-r-full bg-fuchsia-300 hover:bg-gradient-to-r hover:from-blue-200 hover:via-pink-200 hover:to-amber-200 text-gray-800">
                <i className="fas fa-arrow-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-lg space-y-4">
            <h3 className="uppercase">SHOP</h3>
            <ul className="capitalize space-y-2">
              <li>
                <Link to="/collections/all">All</Link>
              </li>
              <li>
                <Link to="/collections/all">Refill Packs</Link>
              </li>
              <li>
                <Link to="/collections/all">Starter Kits</Link>
              </li>
              <li>
                <Link to="/collections/all">Blueland Disney</Link>
              </li>
            </ul>
          </div>
          <div className="text-lg space-y-4">
            <h3 className="uppercase">About</h3>
            <ul className="capitalize space-y-2">
              <li>
                <Link to="/">How It Works</Link>
              </li>
              <li>
                <Link to="/">Our Mission</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Faq</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-lg space-y-4">
            <h3 className="uppercase">Follow</h3>
            <ul className="capitalize space-y-2">
              <li>
                <a href="http://facebook.com">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="http://instagram.com">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="http://tiktok.com">
                  <i className="fab fa-tiktok"></i> Tiktok
                </a>
              </li>
              <li>
                <a href="http://twitter.com">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
