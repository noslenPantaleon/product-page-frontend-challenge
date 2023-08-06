export const fetchData = async () => {
  const response = await fetch('./mocks/products.json');
  const products = await response.json();
  return products;
};
