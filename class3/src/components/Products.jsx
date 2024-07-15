import React from "react";
import { products } from "../data/products";
import Product from "./Product";
// console.log(products, "products");

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {products.map((item, index, array) => {
        console.log(item, index, array);
        return <Product key={item.id} item={item} index={index} />;
        // return (
        //   <div
        //     key={`${item.id}-${item.title}-${index}`}
        //     style={{
        //       display: "flex",
        //       flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        //     }}
        //   >
        //     <div>
        //       {" "}
        //       <h3>{item.title}</h3>
        //       <p>{item.description}</p>
        //       <ul>
        //         <li>
        //           Price: <strong>{item.price}</strong>
        //         </li>
        //         <li>
        //           Rating: <strong>{item.rating.count}</strong>{" "}
        //         </li>
        //       </ul>
        //     </div>
        //     <div>
        //       <img src={item.image} alt={item.title} height={250} width={250} />
        //     </div>
        //   </div>
        // );
      })}
    </div>
  );
};

export default Products;

//       <div
//         key={`${item.id}-${item.title}-${index}`}
//         style={{
//           display: "flex",
//           flexDirection: index % 2 === 0 ? "row" : "row-reverse",
//         }}
//       >
//         <div>
//           {" "}
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//           <ul>
//             <li>
//               Price: <strong>{item.price}</strong>
//             </li>
//             <li>
//               Rating: <strong>{item.rating.count}</strong>{" "}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <img src={item.image} alt={item.title} height={250} width={250} />
//         </div>
//       </div>
//     );
//   })}
// </div>
