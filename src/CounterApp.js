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
                <View style={styles.boxContainer}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()} style={styles.button}>
                        <Text style={styles.TextContainer}>Increase</Text>
                    </TouchableOpacity>
                    
                        <Text style={{ fontSize: 40, textAlign: 'center', }}>{this.props.counter}</Text>
                    
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()} style={{ ...styles.button, backgroundColor: 'green' }}>
                        <Text style={styles.TextContainer}>Decrease</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'center',
    },
    boxContainer: {
        backgroundColor: '#ffcccc',
        borderRadius: 25,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 10,
    },
    TextContainer: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    }
});