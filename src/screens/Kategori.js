import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Kategori extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Ini Screen Kategori</Text>
          </View>  
        );
    }
}

export default Kategori;