export const createSession = () => {
    const expireTime = Date.now() + 5 * 60 * 1000; // 5 min
    localStorage.setItem("sessionExpiry", expireTime);
};

export const isSessionValid = () => {
    const expiry = localStorage.getItem("sessionExpiry");
    if (!expiry) return false;
    return Date.now() < Number(expiry);
};

export const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("sessionExpiry");
    localStorage.removeItem("cart");
};





