import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
class CounterApp extends Component {


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.increaseCounter()} style={styles.button}>
                    <Text style={styles.TextContainer}>Increase</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 40, textAlign:'center',marginTop: 50 }}>{this.props.counter}</Text>

                <TouchableOpacity onPress={() => this.props.decreaseCounter()} style={{...styles.button,backgroundColor:'green'}}>
                    <Text style={styles.TextContainer}>Decrease</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
     backgroundColor:'red',
     marginHorizontal: 110,
     marginTop: 60,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:10
    },
    TextContainer: {
      fontSize:25,
      color:'white',
      fontWeight:'bold'
    }
});