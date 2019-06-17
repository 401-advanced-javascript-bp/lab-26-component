import React from 'react';

// // Vinicio - this is just a different way of creating 'dummy components' with functions
// const Header = () => {
//     return (
//       <header>
//         <h1>Header</h1>
//       </header>
//     );
//   };

class Header extends React.Component {
  render() {
      return (
        <header>
          <h1>Header</h1>
        </header>
      );
    };
  };

export default Header;