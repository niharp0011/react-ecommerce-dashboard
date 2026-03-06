import { useEffect, useState } from "react";
import Products from "./Products";
import HeroSlider from "../components/HeroSlider";
import Loader from "../components/Loader";

function Dashboard() {

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 500);

    }, []);

    if (loading) return <Loader />;


    return (

        <div className="container mx-auto p-4">

            {/* Hero Banner Slider */}

            <HeroSlider />

            {/* Products */}

            <Products />

        </div>

    );

}

export default Dashboard;