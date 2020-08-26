
import React, { Component } from 'react';
//import Popup from 'react-popup';
import LicenseDetails from './LicenseDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class LicenseForm extends Component {
    state = {
        step: 1,
        customer: '',
        country: '',
        package_type: '',
        setup_details: '',
        license_type: '',
        license_start_date: '',
        license_end_date: '',
        additional_units: '',
        storage_system_details: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { customer, country, package_type, setup_details, license_type, license_start_date, license_end_date, additional_units, storage_system_details } = this.state;
        const values = { customer, country, package_type, setup_details, license_type, license_start_date, license_end_date, additional_units, storage_system_details };
        switch(step) {
        case 1:
            return <LicenseDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
       
        case 2:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 3:
            return <Success />
        }
    }
}

export default LicenseForm;