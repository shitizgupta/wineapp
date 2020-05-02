import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';

class MerchantApproved extends React.Component {


    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>

                {/* header starts here */}


                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Feather name='menu' size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Merchant Approved</Text>
                    <TouchableOpacity >

                    </TouchableOpacity>
                </View>




                <View style={styles.body}>
                    <ScrollView
                        scrol
                        contentContainerStyle={{ width: '100%', alignItems: 'center' }}>

                        <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                            <Image source={{
                                uri:
                                    'https://i.ibb.co/NYkD2jf/cartoon.png'
                            }}
                                style={{
                                    height: 125, width: 125, borderRadius: 100,
                                    marginVertical: 20
                                }} />
                            <Text style={[styles.title, { color: Theme.primary }]}>LEVEL 1</Text>
                        </View>


                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Merchant ID</Text>
                            <Text style={styles.valueplaceholder}>UID:2959</Text>
                        </View>

                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Comp. Name</Text>
                            <Text style={styles.valueplaceholder}>Johnny Sins Tv</Text>
                        </View>

                        {/* entry */}
                        <View style={[styles.entry, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                            <Text style={styles.placeholder}>Address</Text>
                            <Text style={[styles.valueplaceholder, { paddingTop: 10, paddingRight: 15 }]}>
                                ADDRESS GOES HERE
                            </Text>
                        </View>

                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Date</Text>
                            <Text style={styles.valueplaceholder}>30/05/2020</Text>
                        </View>


                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Time</Text>
                            <Text style={styles.valueplaceholder}>9:50 PM</Text>
                        </View>

                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>People</Text>
                            <Text style={styles.valueplaceholder}>1</Text>
                        </View>
                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Price</Text>
                            <Text style={styles.valueplaceholder}>25000WON</Text>
                        </View>
                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Avg Cost</Text>
                            <Text style={styles.valueplaceholder}>25000WON</Text>
                        </View>

                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Type</Text>
                            <Text style={styles.valueplaceholder}>Room Salon</Text>
                        </View>




                        {/* ending of the scroll view */}
                    </ScrollView>
                </View>
                <View style={styles.footer}>


                    <TouchableOpacity style={styles.btn} >
                        <Text style={{ fontFamily: Theme.rubikbold, fontSize: Theme.large, color: '#fff' }}>
                            MERCANT WILL CALL YOU SOON, PLEASE WAIT
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
export default MerchantApproved;

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
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        paddingVertical: 15,
        backgroundColor: Theme.darklight,
        marginTop: 10
    },
    placeholder: {
        fontFamily: Theme.rubik,
        fontSize: Theme.large,
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
        backgroundColor: '#7921fc',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '95%',
        height: 150,
        marginVertical: 15
    }
});
