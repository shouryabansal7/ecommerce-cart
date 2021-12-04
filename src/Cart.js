import CartItem from "./CartItem";
import React from "react";

function Cart(props) {
  const { products } = props;
  //   console.log("cart product", products);
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <div
            style={{
              backgroundColor: "rgba(66,103,178,0.2)",
              borderRadius: 20,
              margin: 7,
              padding: 7,
            }}
          >
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteProduct={props.onDeleteProduct}
            />
            {/* {console.log("products-", product)} */}
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
