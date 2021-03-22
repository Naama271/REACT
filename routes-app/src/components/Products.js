
import {datas} from './store.js';
import React from 'react'
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = { datas: [] };
  componentDidMount() {
    this.setState({ datas });
  }
  render() {
    const renderProducts = () => {
      console.log(this.props);
      return this.state.datas.map((product) => {
        return (
          <Link
            to={`${this.props.location.pathname}/${product.id}`}
            key={product.id}
          >
            {product.title}
          </Link>
        );
      });
    };
    return <div>{renderProducts()}</div>;
  }
}

export default Products;
