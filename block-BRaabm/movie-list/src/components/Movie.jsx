// import React from "react";
// import Modal from "./Modal";

// class Movie extends React.Component {
//   clickHandler = (i, setState, activeIndex) => {
//     console.log(setState);
//     setState({
//       activeIndex: i,
//     });
//   };
//   render() {
//     let { Title, Poster, Released } = this.props.movie;
//     return (
//       <li>
//         <div className="img-container">
//           <img src={Poster} alt={Title} />
//           <div className="flex details">
//             <button
//               onClick={() =>
//                 this.clickHandler(
//                   this.props.i,
//                   this.props.setState,
//                   this.props.state.activeIndex
//                 )
//               }
//             >
//               More Info
//             </button>
//           </div>
//         </div>
//         <h2>{Title}</h2>
//         <p>Released: {Released}</p>
//       </li>
//     );
//   }
// }
// export default Movie;
