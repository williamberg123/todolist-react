import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

export default function Main({ children }) {
    return (
        <div className="Main">
            {children}
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};
