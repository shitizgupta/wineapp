import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, TouchableHighlight } from 'react-native';
import Theme from '../Theme';
import { Feather, Fontisto } from '@expo/vector-icons';

import Slider from 'react-native-slide-to-unlock';

const img =
    'https://images.pexels.com/photos/632043/pexels-photo-632043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

class MerchantMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: 'Pick Date',
            time: 'Pick Time',
            distance: null,
            btncolor: Theme.primary,
            vacation: 'ON',
            vacationMode: false
        };
    }

    //TODO: Please remove this, it was used to automatically navigate, 
    // login needed here so that next page appears only when a call is received.
    //uncomment to see the screen
    // componentDidMount() {
    //     const { navigation } = this.props
    //     setTimeout(() => {
    //         navigation.navigate('BookingConfirmed')
    //     }, 2000);
    // }



    colorChange = (btncolor) => {
        const vacationMode = this.state.vacationMode
        if (!vacationMode) {
            this.setState({ btncolor: '#f53d5f' })
            this.setState({ vacation: 'OFF' })
            this.setState({ vacationMode: true })
        }
        else {
            this.setState({ btncolor: Theme.primary })
            this.setState({ vacation: 'ON' })
            this.setState({ vacationMode: false })
        }

    }

    render() {

        const { navigation } = this.props

        return (
            <View style={styles.container}>

                {/* header starts here */}


                <ImageBackground imageStyle={{ opacity: 0.5 }} source={{ uri: img }} style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Feather name='menu' size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Welcome merchant</Text>

                    {/* <TouchableOpacity
                        onPress={(btncolor) => this.colorChange(btncolor)}
                        style={[styles.btn, { backgroundColor: this.state.btncolor }]}
                    >
                        <Fontisto name="holiday-village" size={15} />
                        <Text style={{ fontFamily: Theme.rubikbold, fontSize: Theme.small }}>{this.state.vacation}</Text>
                    </TouchableOpacity> */}
                    <View></View>
                </ImageBackground>




                <View style={styles.body}>



                    {/* TODO: Please integrate markers and realtime location picking over here */}
                    <View style={[styles.entry, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.placeholder}>Current Location</Text>
                            <TouchableOpacity style={{ paddingLeft: 10 }} >
                                <Feather name="edit" size={20} color={Theme.primary} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.valueplaceholder, { paddingRight: 15, paddingTop: 5 }]}>Gyeongido goyangsi ilsan juyopdong 320</Text>

                    </View>

                    <View style={styles.banner}>
                        {/* integrate banner here */}
                    </View>




                    {/* waiting for call */}

                    <Image source={require('../assets/callwaiting.png')}
                        style={{ height: 180, width: 250 }} />
                    <Text style={{ fontFamily: Theme.bison, fontSize: Theme.xl * 1.5, color: '#7c7c7c', marginTop: 15 }}>Waiting for call</Text>


                    <TouchableOpacity style={[styles.entry, { flexDirection: 'column', alignItems: 'center', backgroundColor: '#7921fc' }]}>
                        <Text style={{ color: '#fff', fontFamily: Theme.bison, fontSize: Theme.large * 1.8 }}>
                            CALL STOP
                        </Text>

                    </TouchableOpacity>



                </View>

                <View style={styles.footer}>
                    <Slider
                        containerStyle={{
                            margin: 8,
                            backgroundColor: Theme.darklight,
                            borderRadius: 10,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        sliderElement={
                            <Image
                                style={{
                                    width: 50,
                                    margin: 4,
                                    borderRadius: 5,
                                    height: 50,
                                }}
                                source={{
                                    uri:
                                        'https://i.ibb.co/sQY7xjr/arrw.png',
                                }}
                            />
                        }
                    >
                        <Text style={{ color: '#fff', fontFamily: Theme.bison, fontSize: Theme.large * 1.8 }}>{'SLIDE TO OFF WORK'}</Text>
                    </Slider>
                </View>

            </View>
        );
    }
}
export default MerchantMain;

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
        flex: 8,
        alignItems: 'center',
    },
    footer: {
        flex: 1
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
    banner: {
        backgroundColor: Theme.darklight,
        width: '95%',
        height: 120,
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
        backgroundColor: Theme.primary,
        paddingVertical: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
});
