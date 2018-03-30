import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Form from './Form/Form';
import Header from './components/Header/Header';
import Product from './Product/Product';
import axios from 'axios';



class App extends Component {
  constructor(){
    super();
    this.state = {
        products: [],
    //   Dashboard: "Dashboard",
    //   title: "Header Component",
    //   Form:"Form",
    };

    

componentDidMount
    axios.get('./api/products')
    .then(res => 
        this.setState({
            products: res.data,
        })
    )

    updateProduct(name,price,image){
        axios
        .put(`api/${id}`,{name})




 
  render() {
    const {title, products} = this.state;
    return (
      <div>
      <div className = "TitleBar">
       <Title header={title} />
      </div>
      <div className = "ItemsBox">
      </div>
      <div className = "ImageBox"></div>
      </div>
    )
  };


export default App;
