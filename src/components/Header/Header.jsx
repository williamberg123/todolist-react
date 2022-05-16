import React, { memo } from 'react';

import './Header.css';

function Header() {
    return (
        <header className="Header">
            <h1>LISTA DE TAREFAS</h1>
        </header>
    );
}

export default memo(Header);
