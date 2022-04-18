import React from 'react';
// import Background from './../Images/Desk.jpg';
import MyTable from '../Components/MyTable';
import Input from '../Components/Input';

const Example = () => {
    return (
        <>
            {/* <div className='background' style={{ 
                backgroundImage: "url(" + Background + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
            }}>
                <div style={{
                    paddingTop: '200px',
                    paddingBottom: '150px'
                }}>
                    <p></p>
                </div>
            </div> */}
            <div style={{ 
                padding: '100px',
                paddingTop: '100px'
            }}>
                <h1 classstyle={{ color: '#4f4a4a' }}>Example Users Database</h1>
                <MyTable/>
                <Input/>
            </div>
        </>
    )
}

export default Example;