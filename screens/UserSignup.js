import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import Theme from '../Theme';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

class UserSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordToggle: true,
      eye: 'eye-off',
      imgAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.imgAnim, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      easing: Easing.elastic(1.5),
    }).start();
  }

  eyePressed = () => {
    const { passwordToggle, eye } = this.state;
    if (passwordToggle) {
      this.setState({ passwordToggle: false });
      this.setState({ eye: 'eye' });
    } else {
      this.setState({ passwordToggle: true });
      this.setState({ eye: 'eye-off' });
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 9,
            backgroundColor: Theme.dark,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              width: '100%',
              paddingTop: 25,
            }}
          >
            <Animated.View
              style={{
                opacity: this.state.imgAnim,
                alignItems: 'center',
                transform: [
                  {
                    translateY: this.state.imgAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [70, 0],
                    }),
                  },
                ],
              }}
            >
              <Text style={styles.title}>user sign up</Text>
              <Text style={styles.subtitle}>
                Enter details below for the user!
              </Text>
            </Animated.View>

            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Animated.View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  transform: [
                    {
                      translateX: this.state.imgAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-500, 0],
                      }),
                    },
                  ],
                }}
              >
                <View style={styles.inputcontainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                      keyboardType={'numeric'}
                      maxLength={50}
                      style={[
                        styles.subtitle,
                        { paddingLeft: 10, width: '85%', height: '100%' },
                      ]}
                      placeholder={'Enter USER ID'}
                    />
                  </View>
                  <View style={{ width: 5 }}></View>
                </View>
                <View style={styles.inputcontainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='user' size={24} color={'#7c7c7c'} />
                    <TextInput
                      maxLength={50}
                      style={[
                        styles.subtitle,
                        { paddingLeft: 10, width: '85%', height: '100%' },
                      ]}
                      placeholder={'Enter NickName'}
                    />
                  </View>
                  <View style={{ width: 5 }}></View>
                </View>
                <View style={styles.inputcontainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                      name='email-outline'
                      size={24}
                      color={'#7c7c7c'}
                    />
                    <TextInput
                      maxLength={50}
                      style={[
                        styles.subtitle,
                        { paddingLeft: 10, width: '85%', height: '100%' },
                      ]}
                      placeholder={'Enter Email'}
                    />
                  </View>
                  <View style={{ width: 5 }}></View>
                </View>
                <View style={styles.inputcontainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='phone' size={24} color={'#7c7c7c'} />
                    <TextInput
                      keyboardType={'numeric'}
                      maxLength={12}
                      style={[
                        styles.subtitle,
                        { paddingLeft: 10, width: '85%', height: '100%' },
                      ]}
                      placeholder={'Enter Phone'}
                    />
                  </View>
                  <View style={{ width: 5 }}></View>
                </View>
                <View style={styles.inputcontainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='user' size={24} color={'#7c7c7c'} />
                    <TextInput
                      maxLength={3}
                      style={[
                        styles.subtitle,
                        { paddingLeft: 10, width: '85%', height: '100%' },
                      ]}
                      placeholder={'Enter Age'}
                    />
                  </View>
                  <View style={{ width: 5 }}></View>
                </View>
                <View style={styles.inputcontainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='lock' size={24} color={'#7c7c7c'} />
                    <TextInput
                      maxLength={25}
                      secureTextEntry={this.state.passwordToggle}
                      style={[
                        styles.subtitle,
                        { paddingLeft: 10, width: '85%', height: '100%' },
                      ]}
                      placeholder={'Enter Password'}
                    />
                  </View>
                  <TouchableOpacity onPress={() => this.eyePressed()}>
                    <Feather
                      name={this.state.eye}
                      size={24}
                      color={Theme.primary}
                    />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </View>

            <Animated.View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                transform: [
                  {
                    translateX: this.state.imgAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [500, 0],
                    }),
                  },
                ],
              }}
            >
              {/* TODO: use your validation here */}
              <TouchableOpacity
                onPress={() => navigation.navigate('UserMain')}
                style={styles.btn}
              >
                <Text
                  style={{
                    fontFamily: Theme.rubikbold,
                    fontSize: Theme.large * 1.2,
                  }}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </ScrollView>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bottomtext}>Already have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  styles.bottomtext,
                  { fontFamily: Theme.rubikbold, paddingLeft: 10 },
                ]}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default UserSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: Theme.bison,
    fontSize: Theme.xl * 2,
    color: '#fff',
  },
  subtitle: {
    fontFamily: Theme.rubik,
    fontSize: Theme.large,
    opacity: 0.5,
    color: '#fff',
  },
  inputcontainer: {
    width: '80%',
    paddingVertical: 9,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#111212',
  },
  btn: {
    width: '80%',
    backgroundColor: Theme.primary,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomtext: {
    fontFamily: Theme.rubik,
    fontSize: Theme.large,
  },
});
