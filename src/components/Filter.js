import React, { Component } from 'react';

const Filter = (props) => 
  <div><select onChange={props.handleChange}>
  <option value="all">all</option>
  {props.filters.map(filter =>
    <option key={filter} value={filter}>{filter}</option>
  )}
  </select></div>

Filter.defaultProps = {
  filters: [],
  handleChange : ''
}
  

export default Filter;
