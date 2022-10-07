import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "http://karthikjavaapp.eastus.cloudapp.azure.com:80/hello/world";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Blog posts</h1>
        </div>
        {posts.map((post) => (
          <div className="card" key={post.name}>
            <div className="card-header">
              #{post.name} {post.age}
            </div>
            <div className="card-body">
              <p className="card-text">{post.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;