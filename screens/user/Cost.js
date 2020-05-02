import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Theme from '../../Theme';
import { Feather } from '@expo/vector-icons';


class Cost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 100000 }
    }


    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>

                {/* header starts here */}


                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Feather name='menu' size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={styles.title}>minimum cost</Text>
                    <TouchableOpacity >

                    </TouchableOpacity>
                </View>



                <View style={styles.body}>

                    <Text
                        style={[styles.placeholder, {
                            paddingBottom: 0, color: '#fff',
                            fontSize: Theme.xl * 1.1,
                            paddingBottom: 10,
                            opacity: 0.5
                        }]}>
                        Current : {this.state.current}/KRW
                        </Text>


                    <Text
                        style={[styles.placeholder, {
                            paddingBottom: 0, color: Theme.primary,
                            fontSize: Theme.xl * 2,
                        }]}>
                        {this.state.cost}/KRW
                        </Text>


                    {/* entry */}
                    <View style={styles.entry}>
                        <Text style={styles.placeholder}>Enter here</Text>
                        <TextInput keyboardType={'numeric'}
                            onChangeText={data => this.setState({ current: data })}
                            placeholder="Eg.50,000"
                            style={{ marginTop: 5, opacity: 0.5, width: '80%', height: 20, color: '#fff', fontSize: Theme.large * 1.1 }} />
                    </View>





                    {/* ending of the scroll view */}

                </View>
                <View style={styles.footer}>


                    <TouchableOpacity style={styles.btn} >
                        <Text style={{ fontFamily: Theme.rubikbold, fontSize: Theme.large * 1.2 }}>
                            SET
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
export default Cost;

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
        justifyContent: 'center',
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
