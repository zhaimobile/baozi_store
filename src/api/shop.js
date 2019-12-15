const _products = [
  { id: 1, title: "5 Bao", price: 5.99, inventory: 20 },
  { id: 2, title: "Bao Combo", price: 7.99, inventory: 11 },
  { id: 3, title: "Bao Master", price: 9.99, inventory: 7 }
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCb();
    }, 100);
  }
};
