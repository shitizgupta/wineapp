import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';

class Notice extends React.Component {


    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>

                {/* header starts here */}


                <View style={styles.header}>
                    <TouchableOpacity >

                    </TouchableOpacity>
                    <Text style={styles.title}>Notice</Text>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>




                <View style={styles.body}>
                    <ScrollView
                        contentContainerStyle={{ width: '100%', alignItems: 'center' }}>


                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Admin Message of Notice Here</Text>
                        </View>


                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Admin Message of Notice Here</Text>
                        </View>




                        {/* ending of the scroll view */}
                    </ScrollView>
                </View>
                <View style={styles.footer}>


                </View>

            </View>
        );
    }
}
export default Notice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.dark,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        flexDirection: 'row',
        backgroundColor: Theme.darklight,
        elevation: 10,
    },
    body: {
        flex: 7,
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    title: {
        fontFamily: Theme.bison,
        fontSize: Theme.large * 1.5,
        color: '#fff'
    },
    entry: {
        paddingHorizontal: 15,
        width: '95%',
        paddingVertical: 15,
        backgroundColor: Theme.darklight,
        marginTop: 10
    },
    placeholder: {
        fontFamily: Theme.rubik,
        fontSize: Theme.medium,
        color: '#fff'
    },

});
