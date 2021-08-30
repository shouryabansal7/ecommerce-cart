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
    handleDecreaseQuantity=(product)=>{
        console.log("Hey decrease the quantity by 1");
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }
    handleDeleteProduct=(id)=>{
        const {products} = this.state;
        const items = products.filter((item)=>item.id!==id);

        this.setState({
            products: items
        })
    }
    render(){
        //way to render a list
        //const arr = [1, 2, 3, 4, 5, "hello"];
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                }) }
            </div>
        );
    }
}

export default Cart;