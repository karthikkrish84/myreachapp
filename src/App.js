import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "http://azurejavaapp.eastus.cloudapp.azure.com:80/employee";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
         <tbody>
         <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Date Of Joining</th>
        </tr>
        {posts.map((post,index) => (
          <tr key={index}>
            <td>{post.employeeID}</td>
            <td>{post.name}</td>
            <td>{post.dept}</td>
            <td>{post.salary}</td>
            <td>{post.joiningDate}</td>
          </tr>
        ))}
         </tbody>
         </div>
    );
  }
}
export default App;