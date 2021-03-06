import {Link} from '@shopify/hydrogen/client';
import {useState} from 'react';
import CartToggle from './CartToggle.client';
import MobileNavigation from './MobileNavigation.client';
// import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-20 " role="banner">
      <div
        className={`fixed z-20 h-20  w-full border-b border-gray-200 px-6 md:px-8 md:py-6 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div className="h-full flex lg:flex-col place-content-between">
          <div className="text-center w-full flex justify-between items-center">
            {/* <CurrencySelector /> */}
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              {storeName}
            </Link>
            <div className="flex flex-row justify-between items-center">
              <Navigation collections={collections} storeName={storeName} />
              <CartToggle
                handleClick={() => {
                  if (isMobileNavOpen) setIsMobileNavOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
