import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {
      error: null,
      products: [],
      filters: [],
      loading: ""
    };
  }

  deleteExercise(id) {
    axios.delete("/api/Product/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      products: this.state.products.filter(
        product => product.id_products !== id
      )
    });
  }

  componentDidMount() {
    this.populateProductsData();
  }

  static renderProductsTable(products, deleteExercise) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Product Name:</th>
            <th>Description:</th>
            <th>Colors: </th>
            <th>Price: </th>
            <th colSpan="2">Options: </th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id_products}>
              <td>{product.product_name}</td>
              <td>{product.product_description}</td>
              <td>{product.colors}</td>
              <td>{product.dataprice}</td>
              <td>
                <Link to={`/updateData/${product.id_products}`}>
                  <button>Update</button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteExercise(product.id_products);
                    console.log(product.id_products);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      FetchData.renderProductsTable(this.state.products, this.deleteExercise)
    );

    return (
      <div>
        {console.log(this.state.products)}
        <h1 id="tabelLabel">Products in stock:</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateProductsData() {
    const response = await fetch("https://localhost:5001/api/Product");
    const data = await response.json();
    this.setState({ products: data, loading: false });
  }
}
