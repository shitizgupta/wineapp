import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Theme from '../Theme';
import { MaterialIcons } from '@expo/vector-icons';

class Call extends React.Component {


    render() {

        return (
            <View style={styles.container}>

                {/* header starts here */}


                <View style={styles.header}>

                    <Text style={styles.title}>Neguino tero</Text>
                    <Text style={styles.subtitle}>Incoming...</Text>
                </View>




                <View style={styles.body}>

                    <Image source={{
                        uri:
                            'https://randomuser.me/api/portraits/women/50.jpg'
                    }}
                        style={{
                            height: 212, width: 212, borderRadius: 500,
                            marginVertical: 20
                        }} />


                    {/* ending of the scroll view */}

                </View>
                <View style={styles.footer}>

                    <TouchableOpacity style={[styles.btn, { backgroundColor: 'green' }]}>
                        <MaterialIcons name="call" size={32} color={'#fff'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, { backgroundColor: 'red' }]}>
                        <MaterialIcons name="call-end" size={32} color={'#fff'} />
                    </TouchableOpacity>


                </View>

            </View>
        );
    }
}
export default Call;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.dark,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.darklight,
        elevation: 10,
    },
    body: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    title: {
        fontFamily: Theme.bison,
        fontSize: Theme.large * 1.5,
        color: '#fff'
    },
    subtitle: {
        fontFamily: Theme.rubik,
        fontSize: Theme.large,
        color: '#fff',
        opacity: 0.5
    },
    btn: {
        width: 65,
        height: 65,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
