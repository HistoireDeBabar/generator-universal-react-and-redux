// Define the application shell
import React, { PropTypes } from 'react';
const AppShell = ({ children }) => (
	<div>
      <h1> Super Cool App </h1>
      { children }
	</div>
);

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

