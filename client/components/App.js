import React, {Component} from 'react';
import NavbarContainer from '../containers/NavbarContainer';


export default function App ({ children }) {
  return (

      <div id="main" className="container-fluid">
        <div>
          <NavbarContainer />
        </div>
        <div>
          { children }
        </div>
      </div>

  );
}
