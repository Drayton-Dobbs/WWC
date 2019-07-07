import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div style={{overflow: 'hidden', backgroundColor: '#333'}} id="navbar">
                <a style={{ display: 'inline-block', color: '#f2f2f2', textAlign: 'center', padding: '14px', textDecoration: 'none'}} href="#home">Players</a>
                <a style={{ display: 'inline-block', color: '#f2f2f2', textAlign: 'center', padding: '14px', textDecoration: 'none'}} href="#news">Records</a>
                <a style={{ display: 'inline-block', color: '#f2f2f2', textAlign: 'center', padding: '14px', textDecoration: 'none'}} href="#contact">History</a>
            </div>
        )
    };
};

export default NavBar;