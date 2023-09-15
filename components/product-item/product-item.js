import Image from "next/image";

function ProductItem({ model, price, image }) {
  const imagePath = `/images/allProducts/${image}`;

  return (
    <li>
      <div>
        <h3>{model}</h3>
        <p>From ${price}</p>
      </div>
      <Image src={imagePath} width={264} height={344} alt={model} />
      <button type="button">Details</button>
    </li>
  );
}

export default ProductItem;
