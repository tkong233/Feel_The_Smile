import React from 'react';
import {
  Container, Content, Text, H1, H2, H3,
} from 'native-base';
import Spacer from './UI/Spacer';

import {TouchableHighlight, View, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 35
  }
});

class About extends React.Component {
  _onPressButton() {
    alert('You tapped the button!')
  }
  
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={{height: 325, backgroundColor: 'powderblue'}}>
                <Text style={styles.buttonText}>Detect</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={{height: 325, backgroundColor: 'skyblue'}}>
                <Text style={styles.buttonText}>Menu</Text>
              </View>
            </TouchableHighlight>


          
        {/* <Button
            style={{flex: 1}}
            onPress={this._onPressButton}
            title="Press Me"
          /> */}


          {/* <View style={{ flex: 1, backgroundColor: 'powderblue'}} />
          
          <View style={{ flex: 1, backgroundColor: 'skyblue'}} />
          <View style={{ flex: 1, backgroundColor: 'steelblue'}} /> */}
      </View>
    );
  }
}

export default About;
