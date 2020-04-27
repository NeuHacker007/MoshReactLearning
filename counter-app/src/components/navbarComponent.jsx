import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-light bg-light">
//           Navbar
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

//export default NavBar;
