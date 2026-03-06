import axios from "axios";

/* GET ALL PRODUCTS */

export const getProducts = async () => {

    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;

};


/* GET ALL CATEGORIES */

export const getCategories = async () => {

    const res = await axios.get("https://fakestoreapi.com/products/categories");
    return res.data;

};


/* GET PRODUCTS BY CATEGORY */

export const getProductsByCategory = async (category) => {

    const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
    );

    return res.data;

};