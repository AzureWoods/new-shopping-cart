import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgMediaCard from './productCard.js';

class NewShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:null
    }

  };

  componentDidMount()
  {
    import("./data/products.json")
      .then(json => {this.setState({ data : json.products });} );
  }
  

  render() {
    if(this.state.data)
    {
      const products_data = this.state.data;
      return (
        <div className="NewShoppingCart">
          <ImgMediaCard image_path = {require("./data/images/image_1.jpg")} title = {products_data[0]['title']} price = {products_data[0]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_2.jpg")} title = {products_data[1]['title']} price = {products_data[1]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_3.jpg")} title = {products_data[2]['title']} price = {products_data[2]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_4.jpg")} title = {products_data[3]['title']} price = {products_data[3]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_5.jpg")} title = {products_data[4]['title']} price = {products_data[4]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_6.jpg")} title = {products_data[5]['title']} price = {products_data[5]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_7.jpg")} title = {products_data[6]['title']} price = {products_data[6]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_8.jpg")} title = {products_data[7]['title']} price = {products_data[7]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_9.jpg")} title = {products_data[8]['title']} price = {products_data[8]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_10.jpg")} title = {products_data[9]['title']} price = {products_data[9]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_11.jpg")} title = {products_data[10]['title']} price = {products_data[10]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_12.jpg")} title = {products_data[11]['title']} price = {products_data[11]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_13.jpg")} title = {products_data[12]['title']} price = {products_data[12]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_14.jpg")} title = {products_data[13]['title']} price = {products_data[13]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_15.jpg")} title = {products_data[14]['title']} price = {products_data[14]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_16.jpg")} title = {products_data[15]['title']} price = {products_data[15]['price']} />
          <ImgMediaCard image_path = {require("./data/images/image_17.jpg")} title = {products_data[16]['title']} price = {products_data[16]['price']} />
        </div>
      );
      
    }

    else {
        return <p>Loading...</p>;
      }
    
  }  

}

export default NewShoppingCart;
