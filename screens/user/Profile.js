import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Theme from '../../Theme';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


class Profile extends React.Component {
    state = {
        image: 'https://i.ibb.co/NYkD2jf/cartoon.png',
    };


    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };



    render() {
        const { navigation } = this.props;
        let { image } = this.state;
        return (
            <View style={styles.container}>

                {/* header starts here */}


                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Feather name='menu' size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Your Profile</Text>
                    <TouchableOpacity >

                    </TouchableOpacity>
                </View>




                <View style={styles.body}>
                    <ScrollView
                        scrol
                        contentContainerStyle={{ width: '100%', alignItems: 'center' }}>

                        <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                            <TouchableOpacity onPress={this._pickImage} style={{ alignItems: 'center' }}>
                                <Image source={{
                                    uri: this.state.image
                                }}
                                    style={{
                                        height: 125, width: 125, borderRadius: 100,
                                        marginVertical: 20
                                    }} />

                                <Text style={styles.placeholder}>CLICK TO UPDATE</Text>
                            </TouchableOpacity>

                        </View>


                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Nick Name</Text>
                            <TextInput placeholder="CLICK TO EDIT"
                                style={{ marginTop: 5, opacity: 0.5, width: '80%', height: 20, color: '#fff', fontSize: Theme.large }} />
                        </View>

                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Age</Text>
                            <TextInput maxLength={3} keyboardType={'numeric'} placeholder="CLICK TO EDIT"
                                style={{ marginTop: 5, opacity: 0.5, width: '80%', height: 20, color: '#fff', fontSize: Theme.large }} />
                        </View>


                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Email</Text>
                            <TextInput placeholder="CLICK TO EDIT"
                                style={{ marginTop: 5, opacity: 0.5, width: '80%', height: 20, color: '#fff', fontSize: Theme.large }} />
                        </View>

                        {/* entry */}
                        <View style={styles.entry}>
                            <Text style={styles.placeholder}>Phone</Text>
                            <TextInput maxLength={3} keyboardType={'numeric'} placeholder="CLICK TO EDIT"
                                style={{ marginTop: 5, opacity: 0.5, width: '80%', height: 20, color: '#fff', fontSize: Theme.large }} />
                        </View>






                        {/* ending of the scroll view */}
                    </ScrollView>
                </View>
                <View style={styles.footer}>


                    <TouchableOpacity style={styles.btn} >
                        <Text style={{ fontFamily: Theme.rubikbold, fontSize: Theme.large * 1.2 }}>
                            Save
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
export default Profile;

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
        paddingVertical: 10,
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
