import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div style={{height:'500px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',color:'red',fontSize:'40px'}}>Page Not Found</div>
            </div>
        );
    }
}

export default NotFound;