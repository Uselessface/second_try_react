import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
    return (
        <header className={'app_header'}>
            <img className={'logo'}
                 src={'https://api.freelogodesign.org/assets/thumb/logo/22192360_400.png?t=637862478820000000'}
                 alt={'Logo'}/>
        </header>
    );
}
export default AppHeader;