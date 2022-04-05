import React from 'react';
import Background from './../Images/Desk.jpg';

const Home = () => {
    return (
        <>
            <div className='background' style={{ 
                backgroundImage: "url(" + Background + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
            }}>
                <div style={{
                    fontFamily: 'Impact',
                    fontSize: 200,
                    textAlign: 'center',
                    paddingTop: '200px',
                    paddingBottom: '150px'
                }}>
                    <h1 style={{ color: '#4f4a4a' }}>Welcome to my website project!</h1>
                </div>
            </div>
            <div style={{
                fontFamily: 'Impact',
                fontSize: 200,
                textAlign: 'center',
                textDecoration: 'underline',
                paddingTop: '10px'
            }}>
                <h1 classstyle={{ color: '#4f4a4a' }}>Lore Ipsum</h1>
            </div>
            <div className='container' style={{ overflow: 'hidden' }}>
                <div className='right' style={{
                    float: 'right',
                    width: '100px'
                }}></div>
                <div className='left' style={{
                    float: 'left',
                    width: '100px'
                }}></div>
                <div className='middle' style={{ margin: '0 100px' }}>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        </>
    );
}

export default Home;