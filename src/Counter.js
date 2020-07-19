import React, {Component} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';

class Counter extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }*/

  /*incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }*/

  /*decrementCount = () => {
    this.setState({count: this.state.count - 1});
  }*/

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
  
        <SafeAreaView style={styles.container}>
  
          <TouchableOpacity style={styles.button} onPress={() => this.props.incrementCount()}>
            <Text>Increment</Text>
          </TouchableOpacity>
  
          <Text> {this.props.count} </Text>
          
          <TouchableOpacity style={styles.button} onPress={() => this.props.decrementCount()}>
            <Text>Decrement</Text>
          </TouchableOpacity>
  
        </SafeAreaView>
      </>
    );
  }
};

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCount: () => dispatch({ type: 'INCREMENT_COUNT' }),
        decrementCount: () => dispatch({ type: 'DECREMENT_COUNT' }),
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 20
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
