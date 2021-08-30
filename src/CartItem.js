import React from 'react';

const CartItem = (props) =>{
        const {price, title, qty, id}= props.product;
        const{product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
        console.log("this.props",props);
        return(
            <div className="cart-item">
                <div className="lef-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*button*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                            onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://img-premium.flaticon.com/png/512/484/premium/484611.png?token=exp=1629985995~hmac=b4aa1deb651b98762bce549e42fee052"
                            onClick={()=>onDeleteProduct(id)}
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
        background: '#ccc'
    }
}

export default CartItem;