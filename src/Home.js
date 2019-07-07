import React from 'react';
import NavBar from './Nav';
import Footer from './Footer';
import banner from './Images/banner.jpg';
import cup from './Images/cup.jpg';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div style={{ height: '100vh' }}>
                    <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center center' }}></div>
                    <Footer />
                    <div style={{ backgroundImage: `url(${cup})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center center' }}>
                        <div style={{ fontSize: '10em', color: 'white', position: 'relative', left: '1em', top: '1em' }}> A dynasty
                         <div> is born  </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    };
};

export default HomePage;