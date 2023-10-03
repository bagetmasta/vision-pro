import ProductItem from "../product-item/product-item";

function IPhoneList({ products }) {
  return (
    <section className="iPhone">
      <h2 className="iPhone__title">
        Get Your <span className="iPhone__title-bold">iPhone</span>
      </h2>
      <button type="button">See All</button>
      <ul>
        {products
          .filter((product) => product.category === "iPhone")
          .map((product) => (
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

export default IPhoneList;
