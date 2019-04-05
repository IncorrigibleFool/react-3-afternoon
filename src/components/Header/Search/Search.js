import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (value) => {
    this.setState({text: value})
  }
  
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange = {event => this.handleChange(event.target.value)} />

          <SearchIcon id="Search__icon" onClick = {() => this.props.searchPosts(this.state.text)} />
        </div>
        
      </section>
    )
  }
}