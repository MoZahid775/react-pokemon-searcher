import React from 'react'

const Search = props => {
  
  
  
  
  let searchHandler=(event) => {
      props.searchFilter(event.target.value) 
  }
  
  
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={searchHandler} value={props.filterState}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
