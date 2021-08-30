import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products:[
            {
                price: 54999,
                title: 'Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                id: 1
            },
            {
                price: 29999,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1617043593449-c881f876a4b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                id: 2
            },
            {
                price: 129999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
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
  getCartCount=()=>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  getCartTotal = () =>{
    const {products} = this.state;
    let CartTotal = 0;
    products.map((product)=>{
      CartTotal+=(product.qty*product.price);
    })
    return CartTotal;
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
        count = {this.getCartCount()}
        />
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={ {padding: 10,fontSize: 20} }>
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
