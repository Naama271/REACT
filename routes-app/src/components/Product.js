import React from "react";
import {datas} from './store.js';
import Card from "./Card";

class Product extends React.Component {
  state = { product: null };
  componentDidMount() {

    const id = Number(this.props.match.params.id);
    const findProduct = datas.find((item) => {
      return item.id === id;
    });

    this.setState({ product: findProduct });
  }
  render() {
    return (
      <div>{this.state.product && <Card data={this.state.product} />}</div>
    );
  }
}
export default Product;