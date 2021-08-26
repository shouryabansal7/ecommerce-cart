import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        console.log('this',this.state);
        //setState form 1
        this.setState(
            //passing an object
            /*{
            qty: this.state.qty + 1
            }*/
            //instead of passing as object we can also pass an function
            //setState form 2 - it prevState required use this
            (prevSate)=>{
                return {
                    qty: prevSate.qty + 1
                }
            }
        );
    }
    render(){
        const {price, title, qty}= this.state;
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
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://img-premium.flaticon.com/png/512/484/premium/484611.png?token=exp=1629985995~hmac=b4aa1deb651b98762bce549e42fee052"
                        />
                    </div>
                </div>
            </div>
        );
    }
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