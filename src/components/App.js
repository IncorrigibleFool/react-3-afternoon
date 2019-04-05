import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose.js';
import Post from './Post/Post.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      filter: ''
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/api/posts`).then( res => {
      let data = res.data
      this.setState({
        posts: data
      })
    })
  }

  updatePost(id, text) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text}).then(res => {
      let data = res.data
      this.setState({
        posts: data
      })
    })
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`).then(res => {
      let data = res.data
      this.setState({
        posts: data
      })
    })
  }

  createPost(text) {
    axios.post(`https://practiceapi.devmountain.com/api/posts`, {text}).then(res => {
      let data = res.data
      this.setState({
        posts: data
      })
    })
  }

  searchPosts = (text) => {
    this.setState({filter: text})
  }

  render() {
    var { posts } = this.state;

    var filteredPosts = posts.filter((elem) => elem.text.includes(this.state.filter))

    return (
      <div className="App__parent">
        <Header 
          posts = {this.state.posts}
          searchPosts = {this.searchPosts}
        />

        <section className="App__content">

          <Compose 
            createPost = {this.createPost}/>
          
          {filteredPosts.map(post => (
            <Post 
              key = {post.id}
              text = {post.text}
              date = {post.date}
              updatePost = {this.updatePost}
              id = {post.id}
              deletePost = {this.deletePost}
            />))}

        </section>
      </div>
    );
  }
}

export default App;
