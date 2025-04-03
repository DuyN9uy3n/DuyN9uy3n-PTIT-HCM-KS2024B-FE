let cart = [
  { name: `Men men`, price: 30000, quantity: 2 },

  { name: `Mi tom`, price: 5000, quantity: 1 },

  { name: `Banh bao`, price: 15000, quantity: 3 },
];

// function totalAmount(cart) {
//   let total = 0;
//   cart.forEach((product) => {
//     total += product.price * product.quantity;
//   });
//   return total;
// }

let totalAmount = (cart) => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

console.log(totalAmount(cart));
