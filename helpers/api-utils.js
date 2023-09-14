export async function getAllProducts() {
  const response = await fetch(
    "https://vision-pro-b350d-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  );
  const data = await response.json();

  const products = [];

  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
    });
  }

  return products;
}
