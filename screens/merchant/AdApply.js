import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Ad extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Ad</Text>
            </View>
        );
    }
}
export default Ad;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});