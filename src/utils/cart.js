export const getCart = () => {

    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {

    let cart = getCart();
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
        exist.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
};

export const decreaseQty = (id) => {

    let cart = getCart();
    const item = cart.find(p => p.id === id);

    if (!item) return;
    item.qty -= 1;

    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
};

export const increaseQty = (id) => {

    const cart = getCart();
    const item = cart.find(p => p.id === id);

    if (item) item.qty += 1;

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
};

export const clearCart = () => {
  localStorage.removeItem("cart");

  window.dispatchEvent(new Event("cartUpdated"));
};