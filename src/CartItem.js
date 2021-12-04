import React from "react";

function CartItem(props) {
  //   console.log("this.props", props);
  const { price, title, qty, img, id } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;

  //   console.log("product item", product);
  return (
    <div className="cart-item">
      <div className="lef-block">
        <img style={styles.image} src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/*button*/}
          <img
            alt="increase"
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/992/992651.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/992/992683.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/2874/premium/2874821.png?token=exp=1638626654~hmac=11d7947ec3ae0942d79f42fbad16e7fe"
            onClick={() => onDeleteProduct(id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
