import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Theme from '../../Theme';
import { Feather } from '@expo/vector-icons';

class License extends React.Component {


    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>

                {/* header starts here */}


                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Feather name='menu' size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={styles.title}>License</Text>
                    <TouchableOpacity >

                    </TouchableOpacity>
                </View>




                <View style={styles.body}>

                    {/* TODO: please integrate file system here */}
                    <View style={styles.attachimage}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: '90%', height: '100%' }}>
                                <Text
                                    style={{ fontFamily: Theme.rubik, color: Theme.primary }}
                                >
                                    ATTACH BUSINESS LICENSE
                    </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MerchantMain')}
                        style={styles.btn}
                    >
                        <Text
                            style={{
                                fontFamily: Theme.rubikbold,
                                fontSize: Theme.large * 1.2,
                            }}
                        >
                            Send
              </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
export default License;

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
        alignItems: 'center'
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
    attachimage: {
        width: '90%',
        paddingVertical: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 25,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#7c7c7c',
    },
    btn: {
        width: '90%',
        backgroundColor: Theme.primary,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});
