// LicenseDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class LicenseDetails extends Component{

    saveAndContinue = (e) => {        //Routing to the next component as user will fill out the details. 
        e.preventDefault()  
        //alert("Cojy3q4BOuPi0ZuGmtEP0bbZKKiE44vs6foJrNs9Rlw=")                      
        this.props.nextStep()  //  Each time this function is called, it updates the state of the LicenseForm component.
    }

    render(){
        const { values } = this.props;
        //const countries = require("./countries.json")

        return(
            <Form >
              
                <Form.Field>
                    <label>Customer</label>
                    <input
                    placeholder='Customer'
                    onChange={this.props.handleChange('customer')} //the name of the field will be updated on input element.
                    defaultValue={values.customer}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input
                    placeholder='Country'
                    onChange={this.props.handleChange('country')}
                    defaultValue={values.country}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Package Type</label>
                    <input
                    placeholder='Package Type'
                    onChange={this.props.handleChange('package_type')}
                    defaultValue={values.package_type}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Setup Details</label>
                    <input
                    placeholder='Setup Details'
                    onChange={this.props.handleChange('setup_details')}
                    defaultValue={values.setup_details}
                    />
                </Form.Field>
                <Form.Field>
                    <label>License Type</label>
                    <input
                    placeholder='License Type'
                    onChange={this.props.handleChange('license_type')}
                    defaultValue={values.license_type}
                    />
                </Form.Field>
                <Form.Field>
                    <label>License Start Date</label>
                    <input
                    placeholder='License Start Date'
                    onChange={this.props.handleChange('license_start_date')}
                    defaultValue={values.license_start_date}
                    />
                </Form.Field>
                <Form.Field>
                    <label>License End Date</label>
                    <input
                    placeholder='License End Date'
                    onChange={this.props.handleChange('license_end_date')}
                    defaultValue={values.license_end_date}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Additional Units</label>
                    <input
                    placeholder='Additional Units'
                    onChange={this.props.handleChange('additional_units')}
                    defaultValue={values.additional_units}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Storage System Details</label>
                    <input
                    placeholder='Storage System Details'
                    onChange={this.props.handleChange('storage_system_details')}
                    defaultValue={values.storage_system_details}
                    />
                </Form.Field>

                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default LicenseDetails;