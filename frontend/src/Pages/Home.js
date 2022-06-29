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
                    paddingTop: '150px',
                    paddingBottom: '200px'
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
                <h1 classstyle={{ color: '#4f4a4a' }}>What is this?</h1>
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
                    <p>"Hi my name is Samuel Kong, and welcome to my website project. This website is a
                        personal project of mine with the goal of expanding my skills and learning more 
                        about dev ops and web development as well as a showcase of my abilities.
                        This website is built using React JS and React-Bootstrap for the frontend which
                        communicates with a Nodes JS express backend through RESTful API calls.
                        This occurs under the examples tab where there is an example table that would 
                        store users onto a CouchDB database which is stored on the backend. 
                        Modifications to the table such as adding a user users are done through the 
                        above API calls. Included in this website is my contact information and more 
                        about me, feel free to reach out if you are interested in my work."</p>
                </div>
            </div>
        </>
    );
}

export default Home;