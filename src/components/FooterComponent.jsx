import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    
    render() {
       const date=new Date();
       const year=date.getFullYear();
        return (
            <div >
                <footer className='footer bg-light'  style={{display:"flex", justifyContent:"center",position:"absolute",bottom:"0px",width:"100%",height:"30px"}} >
                    <span className="text-muted">Made By Bhushan {year} </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
