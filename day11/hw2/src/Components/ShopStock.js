import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  let param = useParams();
  console.log(param);
  return (
    <div>
      <h2>Detail</h2>
      <p>This ID of this product is {param.id}</p>
    </div>
  );
}

const ShopStock = () => {
  const product = [
    { id: "01", name: "cloth" },
    { id: "02", name: "jeans" },
    { id: "03", name: "ring" },
    { id: "04", name: "necklace" },
    { id: "05", name: "shoes" },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {product.map((x) => {
          return (
            <li>
              <Link to={`${x.id}`}>{x.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { ShopStock, ProductDetail };
