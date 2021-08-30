import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which definitely has an element with an id of 'dev-products'
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // assuming our container doesnt have an element
  // with id 'dev-products

  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Situation #2
// We are running this file in development or production
// through the container app. There is no guarantee
// that an element with an id of 'dev-products'
// we do not want to try to immediately render the app
export { mount };
