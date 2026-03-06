import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import OrderSummary from "../components/OrderSummary";
import { getCart } from "../utils/cart";
import Loader from "../components/Loader";

function Cart() {

    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadCart = () => {

            const cart = getCart();

            setCartProducts(cart);

            const totalPrice = cart.reduce((sum, item) => {
                return sum + item.price * item.qty;
            }, 0);

            setTotal(totalPrice);

        };

        loadCart();

        window.addEventListener("cartUpdated", loadCart);

        return () => window.removeEventListener("cartUpdated", loadCart);

    }, []);

    useEffect(() => {

        const cart = getCart();

        setCartProducts(cart);

        setTimeout(() => {
            setLoading(false);
        }, 400);

    }, []);

    if (loading) return <Loader />;

    return (

        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6">

            {/* PRODUCTS */}

            <div className="flex-1">

                <h1 className="text-2xl font-bold mb-6 dark:text-white">
                    My Cart
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {cartProducts.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))}

                </div>

            </div>

            {/* ORDER SUMMARY */}

            <div className="lg:w-80 flex flex-col justify-end">

                <div className="hidden lg:block fixed bottom-6 right-6 w-80">

                    <OrderSummary
                        total={total}
                        items={cartProducts.length}
                    />

                </div>

            </div>

            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 flex justify-between items-center">

                <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-bold text-blue-600">${total.toFixed(2)}</p>
                </div>

                <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                    Order Now
                </button>

            </div>

        </div>

    );

}

export default Cart;