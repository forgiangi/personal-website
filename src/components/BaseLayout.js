import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Head from '../components/Head';

const theme = {
  mainColor: '#161338',
  baseTextColor: '#161338',
  smallScreen: '400px',
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Head />
      <main>{children}</main>
    </div>
  </ThemeProvider>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

injectGlobal`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    letter-spacing: 1px;
    color: ${theme.baseTextColor};
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Layout;
