



//Services/CartService.js
let cart = [];

const CartService = {
  addToCart: (product) => {
    cart.push(product);
  },
  getCart: () => cart,
  removeFromCart: (id) => {
    cart = cart.filter((item) => item.id !== id);
  },
};

export default CartService;



