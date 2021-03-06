
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class StateScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>State Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  standartText: {
    color: '#795548'
  },
});

export default StateScreen; 