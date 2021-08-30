import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 29999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    handleIncreaseQuantity=(product)=>{
        console.log("Hey increase the quantity by 1");
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products: products
        })
    }
    render(){
        //way to render a list
        //const arr = [1, 2, 3, 4, 5, "hello"];
        const {products} = this.state;
        return(
            <div>
                {products.map((product)=>{
                    return (
                        <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        />
                    )
                }) }
            </div>
        );
    }
}

export default Cart;