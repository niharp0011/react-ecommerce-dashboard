import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import Loader from "../components/Loader"
import CategorySidebar from "../components/CategorySidebar"
import { getProducts, getProductsByCategory } from "../services/productService";
import SearchBar from "../components/SearchBar";
import { addToCart } from "../utils/cart";
import AOS from "aos"
import "aos/dist/aos.css"

function Products() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState("all")
    const [search, setSearch] = useState("");

    useEffect(() => {

        AOS.init({
            duration: 500,
            easing: "ease-in-out",
            once: false

        });

    }, []);

    useEffect(() => {

        const fetchProducts = async () => {

            let data;

            if (category === "all") {
                data = await getProducts();
            } else {
                data = await getProductsByCategory(category);
            }

            setProducts(data);
            setLoading(false);

            AOS.refresh();

        };

        fetchProducts();

    }, [category]);

    if (loading) return <Loader />

    const filteredProducts = products.filter((p) => {

        const matchCategory =
            category === "all" || p.category === category;

        const matchSearch =
            p.title.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (

        <div className="container mx-auto p-4">

            {/* SEARCH BAR */}

            <div className="flex justify-center mb-6">
                <SearchBar search={search} setSearch={setSearch} />
            </div>

            {/* MAIN LAYOUT */}

            <div className="flex flex-col md:flex-row gap-6">

                {/* SIDEBAR */}

                <div className="w-full md:w-60">
                    <CategorySidebar setCategory={setCategory} />
                </div>

                {/* PRODUCTS GRID */}

                <div className="flex-1">

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                        {filteredProducts.map((p, index) => (

                            <div
                                key={p.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <ProductCard
                                    product={p}
                                    addToCart={addToCart}
                                />
                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Products