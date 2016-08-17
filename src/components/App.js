// React and React proptypes
import React, { PropTypes } from 'react';

// Application wrapper component
export default function App(props) {
  return (
    <div>
      <h1>React Boilerplate</h1>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
