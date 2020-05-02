import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Theme from '../Theme';

//TODO: replace images as per your choice
const img1 =
  'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg';
const img2 =
  'https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg';

class PickUser extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>Select the user Type</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserSignup')}
            style={styles.card}
          >
            <Image style={styles.img} source={{ uri: img1 }} />
            <View style={styles.dropback}></View>
            <Text style={styles.placeholder}>I am USER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MerchantSignup')}
            style={styles.card}
          >
            <Image style={styles.img} source={{ uri: img2 }} />
            <View style={styles.dropback}></View>
            <Text style={styles.placeholder}>I am MERCHANT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.btn}
          >
            <Text
              style={{
                fontFamily: Theme.bison,
                fontSize: Theme.large * 1.5,
              }}
            >
              CANCEL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default PickUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.dark,
  },
  body: {
    flex: 7,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: Theme.darklight,
    width: '90%',
    height: 120,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    opacity: 9,
    height: '100%',
    position: 'absolute',
  },
  title: {
    fontFamily: Theme.bison,
    fontSize: Theme.xl * 1.5,
    color: 'white',
    marginTop: 25,
  },
  placeholder: {
    fontFamily: Theme.rubikbold,
    color: '#ffff',
    fontSize: Theme.large,
  },
  dropback: {
    width: '100%',
    opacity: 0.5,
    height: '100%',
    backgroundColor: Theme.dark,
    position: 'absolute',
  },
  btn: {
    width: '80%',
    backgroundColor: Theme.primary,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
