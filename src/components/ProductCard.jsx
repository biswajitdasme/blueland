import {Image, Link, ProductProvider, AddToCartButton} from '@shopify/hydrogen';

import MoneyCompareAtPrice from './MoneyCompareAtPrice.client';
import MoneyPrice from './MoneyPrice.client';

/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */

export default function ProductCard({product}) {
  const selectedVariant = product.variants.edges[0].node;

  if (selectedVariant == null) {
    return null;
  }

  return (
    <ProductProvider product={product}>
      <div className="text-md mb-4 relative">
        <div className="rounded-lg border-2 border-gray-200 mb-2 relative flex items-center justify-center overflow-hidden object-cover h-96 p-2">
          {selectedVariant.image ? (
            <>
              <Image
                className="bg-white absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover object-fill hover:scale-110"
                image={selectedVariant.image}
              />
            </>
          ) : null}
          {!selectedVariant?.availableForSale && (
            <div className="absolute top-3 left-3 rounded-3xl text-xs bg-black text-white py-3 px-4">
              Out of stock
            </div>
          )}
          <AddToCartButton
            variantId={selectedVariant.id}
            className="inline-block absolute bottom-2 bg-blue-500 hover:bg-gradient-to-r hover:from-blue-200 hover:via-purple-200 hover:to-orange-200 hover:text-gray-700  border-2 border-transparent
              hover:border-gray-500 rounded-full text-xl w-full my-2 text-white text-center mx-4 p-3 capitalize font-semibold transition-all duration-100"
          >
            Quick Add | ${selectedVariant.priceV2.amount}
          </AddToCartButton>
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/products/${product.handle}`}>
            <span className="text-black font-semibold mb-0.5">
              {product.title}
            </span>
          </Link>
          {/* {product.vendor && (
              <p className="text-gray-900 font-medium text-sm mb-0.5">
              {product.vendor}
              </p>
              )} */}

          <div className="flex ">
            {selectedVariant.compareAtPriceV2 && (
              <MoneyCompareAtPrice money={selectedVariant.compareAtPriceV2} />
            )}
            <MoneyPrice money={selectedVariant.priceV2} />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}
