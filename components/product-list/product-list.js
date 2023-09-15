import ProductItem from "../product-item/product-item";

const CATEGORIES = [
  "All Products",
  "iPhone",
  "iPad",
  "Mac",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessory",
];

function ProductList({ products }) {
  const sortedProducts = [...products].sort((a, b) => {
    if (a.category === "iPhone" && b.category !== "iPhone") {
      return 1;
    } else if (b.category === "iPhone" && a.category !== "iPhone") {
      return -1;
    }
    return 0;
  });

  return (
    <section>
      <h3>
        Explore in <span>Products</span>
      </h3>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category}>
            <button type="button">{category}</button>
          </li>
        ))}
      </ul>
      <ul>
        {sortedProducts.map((product) => (
          <ProductItem
            key={product.id}
            model={product.model}
            price={product.price}
            image={product.image}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
