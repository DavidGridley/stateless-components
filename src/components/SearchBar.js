import React from 'react';

// class SearchBar extends React.Component {
//   render(){
//     return (
//       <form
//         className="d-flex justify-content-center"
//         onSubmit={this.props.handleSubmit}
//       >
//         <input
//           type="text"
//           name="query"
//           placeholder="Search..."
//           onChange={this.props.handleChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//     );
//   }
// };


function SearchBar(props){
  return (
    <form
        className="d-flex justify-content-center"
        onSubmit={props.handleSubmit}
      >
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
}




export default SearchBar;
