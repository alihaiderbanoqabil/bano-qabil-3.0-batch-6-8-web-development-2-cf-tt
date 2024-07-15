import React from "react";

const Product = (props) => {
  // console.log(props, "props");
  const { item, index } = props;
  const { id, title, description, image } = item;
  return (
    <div
      // key={`${item.id}-${item.title}-${index}`}
      key={`${item.id}-${title}-${index}`}
      style={{
        display: "flex",
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
      }}
    >
      <div>
        {" "}
        {/* <h3>{item.title}</h3> */}
        <h3>{title}</h3>
        <p>{description}</p>
        {/* <p>{item.description}</p> */}
        <ul>
          <li>
            Price: <strong>{item.price}</strong>
          </li>
          <li>
            Rating: <strong>{item.rating.count}</strong>{" "}
          </li>
        </ul>
      </div>
      <div>
        {/* <img src={item.image} alt={item.title} height={250} width={250} /> */}
        <img src={image} alt={title} height={250} width={250} />
      </div>
    </div>
  );
};

export default Product;
