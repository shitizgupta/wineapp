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
} from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';

class Login extends React.Component {
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
            flex: 8,
            backgroundColor: Theme.dark,
            alignItems: 'center',
            justifyContent: 'space-around',
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
            <Text style={styles.title}>Welcome!</Text>
          </Animated.View>

          <View style={{ width: '100%', alignItems: 'center' }}>
            <Animated.View
              style={{
                width: '100%',
                alignItems: 'center',
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
              <View style={styles.inputcontainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name='user' size={24} color={'#7c7c7c'} />
                  <TextInput
                    maxLength={50}
                    style={[
                      styles.subtitle,
                      { paddingLeft: 10, width: '85%', height: '100%' },
                    ]}
                    placeholder={'Enter Username'}
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
              <TouchableOpacity style={{ alignItems: 'flex-end', width: '80%' }}>

                <Text style={[styles.subtitle, {
                  paddingTop: 10
                }]}>Forgot Password?</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Animated.View
            style={{
              width: '100%',
              alignItems: 'center',
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
                LOGIN
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bottomtext}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PickUser')}>
              <Text
                style={[
                  styles.bottomtext,
                  { fontFamily: Theme.rubikbold, paddingLeft: 10 },
                ]}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: Theme.bison,
    fontSize: Theme.xl * 3,
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
    paddingVertical: 10,
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
  },
  bottomtext: {
    fontFamily: Theme.rubik,
    fontSize: Theme.large,
  },
});
