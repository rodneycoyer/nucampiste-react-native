import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return (
            <ScrollView>
                <Card title="Contact Information">
                        <Text wrapperStyle={{ margin: 20 }}> 1 Nucamp Way </Text>
                        <Text wrapperStyle={{ margin: 20 }}> Seattle, WA 98001 </Text>
                        <Text wrapperStyle={{ margin: 20}} style={{marginBottom:10}}> U.S.A </Text>
                        <Text wrapperStyle={{ margin: 20 }}> Phone: 1-206-555-1234 </Text>
                        <Text wrapperStyle={{ margin: 20 }}> Email: campsites@nucamp.co </Text>
                </Card>
            </ScrollView>
    );
    }
}

export default Contact;
