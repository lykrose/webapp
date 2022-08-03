import React from 'react';
import Background from './../Images/Desk.jpg';
import Image from 'react-bootstrap/Image';
import Face from './../Images/Avatar.png';
import Pdf from './../Data/Resume.pdf';

const About = () => {
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
                    paddingTop: '200px',
                    textAlign: 'center',
                    paddingBottom: '150px',
                    fontFamily: 'impact'
                }}>
                    <h1>About Me</h1>
                </div>
            </div>
            <div className='container' style={{ 
                overflow: 'hidden',
                paddingTop: '20px'
            }}>
                <div className='right' style={{
                    float: 'right',
                    width: '100px'
                }}></div>
                <div className='left' style={{
                    float: 'left',
                    width: '100px'
                }}></div>
                <div className='middle' style={{ margin: '0 100px' }}>
                    <div className='box' style={{
                        marginBottom: '15px'
                    }}>
                        <Image src={Face} roundedCircle style={{
                            maxWidth: '100px',
                            maxHeight: '100px',
                            float: 'left',
                            paddingRight: '10px'
                        }}/>
                        <p style={{ display: 'inline' }}>"Welcome to my about me section! If you are wondering about me, 
                        I am a 22 year old graduate of York University with a Bachelor's of Science in Computer Science. 
                        I am also a very hard worker and a quick learner who has a strong intrest and passion in technology 
                        and I look forward to expand my skills. I am currently looking for work related to Computer Science, 
                        specifically in the web development field. I have expreience with many web development technologies 
                        such as React JS, Node JS, Express, RESTful API, and HTML and CSS and have worked in the in this 
                        field previously. Attached below is my Resume if you are interested or a downloadable link <a href={ Pdf }>here</a>."</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;