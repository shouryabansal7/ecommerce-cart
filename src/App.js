import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "@firebase/firestore";
import React from "react";
import db from ".";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    //this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  componentDidMount() {
    //listen to data once
    // const querySnapshot = await getDocs(collection(db, "products"));
    // let products = [];
    // querySnapshot.forEach((doc) => {
    //   const document = doc.data();
    //   document["id"] = doc.id;
    //   products.push(document);
    // });

    //listen to data real time
    let products = [];
    const Ref = query(collection(db, "products"), orderBy("qty", "desc"));
    onSnapshot(Ref, (querySnapshot) => {
      //console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        const document = doc.data();
        document["id"] = doc.id;
        products.push(document);
      });
      console.log("Products temp", products);
      this.setState({
        products,
        loading: false,
      });
      console.log("state", this.state.products);
      products = [];
    });
  }

  handleIncreaseQuantity = (product) => {
    //console.log("Hey increase the quantity by 1");
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products: products,
    // });

    const docRef = doc(db, "products", products[index].id);

    updateDoc(docRef, {
      qty: products[index].qty + 1,
    });
  };
  handleDecreaseQuantity = (product) => {
    //console.log("Hey decrease the quantity by 1");
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    const docRef = doc(db, "products", products[index].id);
    updateDoc(docRef, {
      qty: products[index].qty - 1,
    });
    // products[index].qty -= 1;
    // this.setState({
    //   products,
    // });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const docRef = doc(db, "products", id);

    deleteDoc(docRef);
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let CartTotal = 0;
    products.map((product) => {
      CartTotal += product.qty * product.price;
    });
    return CartTotal;
  };

  addProduct = async () => {
    const docRef = await addDoc(collection(db, "products"), {
      title: "macbook air",
      price: 149999,
      qty: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000",
    });
    console.log("Document written with ID: ", docRef.id);
  };
  render() {
    const { products, loading } = this.state;
    // console.log("products", products);
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a product
        </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>loading products ...</h1>}
        <div
          style={{
            padding: 20,
            fontSize: 30,
            bottom: 0,
            position: "sticky",
            boxSizing: "border-box",
            color: "yellow",
            width: "100%",
            backgroundColor: "#4267b2",
          }}
        >
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
