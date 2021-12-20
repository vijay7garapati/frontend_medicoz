import React from 'react';


class List extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
    products: []
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:2000/list';
    

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
       
          this.setState({products: result.notes});
        
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, products} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Product List</h2>
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Title</th>
               
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product,key) => (
                <tr key={key}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.title}</td>s
               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default List;