// Confirmation.jsx
import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { customer, country, package_type, setup_details, license_type, license_start_date, license_end_date, additional_units, storage_system_details }} = this.props;

        return(
            <div>
                <h1 className="ui centered">Please confirm your details.</h1>
                <p>Click Confirm if the following details match correctly with the details you entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Customer: {customer}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Country: {country}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Package Type: {package_type}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Setup Details: {setup_details}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>License Type: {license_type}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>{license_start_date} </List.Content>
                    </List.Item>
                    
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>{license_end_date} </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Addtional Units: {additional_units}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Storage System Details: {storage_system_details}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;