import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div style={{height:"100px"}}>
                <header >
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{height:"60px"}}>
                    <div><a href="  " className="navbar-brand" style={{paddingLeft:"20px"}} onClick={this.addEmployee}>Employee Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
