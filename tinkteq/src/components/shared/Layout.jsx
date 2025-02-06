import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import TopNav from './TopNav';
import ThemeContext from '../../context/ThemeContext';
const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col min-h-screen ">
      <TopNav theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow p-2 md:p-4 ">
        {children}
      </main>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
