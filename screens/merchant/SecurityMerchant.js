import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Theme from '../../Theme';
import { Feather } from '@expo/vector-icons';

class Security extends React.Component {


    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>

                {/* header starts here */}


                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Feather name='menu' size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={styles.title}> YOur Security</Text>
                    <TouchableOpacity >

                    </TouchableOpacity>
                </View>




                <View style={styles.body}>
                    <ScrollView
                        contentContainerStyle={{ width: '100%', alignItems: 'center' }}>


                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Password</Text>
                            <TextInput secureTextEntry={true} placeholder="change here"
                                style={{ marginTop: 5, opacity: 0.5, width: '80%', height: 20, color: '#fff', fontSize: Theme.large * 1.1 }} />
                        </View>

                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Confirm Password</Text>
                            <TextInput secureTextEntry={true} placeholder="confirm here"
                                style={{ marginTop: 5, opacity: 0.5, width: '80%', height: 20, color: '#fff', fontSize: Theme.large * 1.1 }} />
                        </View>



                        {/* ending of the scroll view */}
                    </ScrollView>
                </View>
                <View style={styles.footer}>


                    <TouchableOpacity style={styles.btn} >
                        <Text style={{ fontFamily: Theme.rubikbold, fontSize: Theme.large * 1.2 }}>
                            CHANGE PASSWORD
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
export default Security;

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
    valueplaceholder: {
        fontFamily: Theme.rubik,
        fontSize: Theme.large,
        color: '#fff',
        opacity: 0.5,
        paddingRight: 10
    },
    slider: {
        width: '100%',
    },
    btn: {
        width: '95%',
        backgroundColor: Theme.primary,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    map: {
        width: '95%',
        height: 150,
        marginVertical: 15
    }
});
