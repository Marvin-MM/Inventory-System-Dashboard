import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import Rating from "../(components)/Rating";
import Image from "next/image";
import Loading from "../(components)/Loading";

type Product = {
  productId: number;
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
  imageUrl: string;
};

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);

  // Fetch popular products from FakeStoreAPI
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5") // Fetch top 5 products
      .then((response) => response.json())
      .then((data) => {
        const mappedProducts = data.map((item: any) => ({
          productId: item.id,
          name: item.title,
          price: item.price,
          rating: Math.floor(item.rating.rate), // Use the rating from the API
          stockQuantity: Math.floor(Math.random() * 1000) + 1, // Random stock quantity
          imageUrl: item.image, // Use the image URL from FakeStoreAPI
        }));
        setPopularProducts(mappedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-3 px-5 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="rounded-lg w-14 h-14"
                  />
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex items-center">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  {Math.round(product.stockQuantity / 1000)}k Sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;