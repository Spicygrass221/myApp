import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <View style={{flex: 1, display: 'flex', position: 'absolute'}}>
            <View style={{backgroundColor: 'green', width: '100vw', alignItems: 'center', margin: 10, padding: 10, borderRadius: 10,}}>
                <Text style={styles.text}>Midys</Text>
            </View>
            <View style={{height: 400, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 20, position: 'relative', marginLeft: 10}}>
                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Ini Screen Home</Text>
            </View>
          </View>  
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})