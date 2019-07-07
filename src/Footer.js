import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div style={{overflow: 'hidden', backgroundColor: '#333'}} id="navbar">
                <a style={{float: 'right', display: 'block', color: '#f2f2f2', textAlign: 'center', padding: '14px', textDecoration: 'none'}} href="#home"></a>
                <a style={{float: 'right', display: 'block', color: '#f2f2f2', textAlign: 'center', padding: '14px', textDecoration: 'none'}} href="#news"></a>
                <a style={{float: 'right', display: 'block', color: '#f2f2f2', textAlign: 'center', padding: '14px', textDecoration: 'none'}} href="#contact"></a>
            </div>
        )
    };
};

export default Footer;