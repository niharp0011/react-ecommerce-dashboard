import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { getCart, addToCart, increaseQty, decreaseQty } from "../utils/cart";

function ProductCard({ product }) {

    const [qty, setQty] = useState(0);

    useEffect(() => {

        const updateCart = () => {
            const cart = getCart();
            const item = cart.find((i) => i.id === product.id);
            setQty(item ? item.qty : 0);

        };

        updateCart();

        window.addEventListener("cartUpdated", updateCart);
        return () => window.removeEventListener("cartUpdated", updateCart);

    }, [product.id]);

    return (

        <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 flex flex-col">

            <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700 p-4">

                <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />

            </div>

            <h2 className="font-semibold mt-3 line-clamp-2 text-gray-800 dark:text-gray-200">
                {product.title}
            </h2>

            <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">
                ${product.price}
            </p>

            {/* BUTTON / COUNTER */}

            {qty === 0 ? (

                <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg" >
                    <FaCartPlus /> Add To Cart
                </button>
            ) : (
                <div className="mt-4 flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg">

                    <button onClick={() => decreaseQty(product.id)} className="px-4 py-2 text-lg font-bold"> - </button>

                    <span className="font-semibold"> {qty} </span>

                    <button onClick={() => increaseQty(product.id)} className="px-4 py-2 text-lg font-bold"> + </button>

                </div>

            )}

        </div>

    );

}

export default ProductCard;