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
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-check-box';

class MerchantSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordToggle: true,
      eye: 'eye-off',
      imgAnim: new Animated.Value(0),
      isChecked: false,
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
    //TODO: replace with your merchant types
    let data = [
      {
        value: 'Bar Tender',
      },
      {
        value: 'Value',
      },
      {
        value: 'Value 2',
      },
    ];

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ width: '100%' }}>
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
            <Text style={styles.title}>Merchant Sign up</Text>
            <Text style={styles.subtitle}>
              Enter details below for the merchant!
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
                    placeholder={'COMPANY NAME HERE'}
                  />
                </View>
                <View style={{ width: 5 }}></View>
              </View>
              <View style={styles.inputcontainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    maxLength={50}
                    style={[
                      styles.subtitle,
                      { paddingLeft: 10, width: '85%', height: '100%' },
                    ]}
                    placeholder={'Enter UserID'}
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
              {/* line  */}
              <View
                style={{
                  width: '90%',
                  backgroundColor: '#7c7c7c',
                  height: 1,
                  marginTop: 25,
                  opacity: 0.5,
                }}
              ></View>

              {/* entries for the form part 2 start here */}

              <View style={[styles.inputcontainer, { paddingVertical: 0 }]}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Dropdown
                    baseColor={'#fff'}
                    containerStyle={{
                      width: '100%',
                    }}
                    label='Merchant Type'
                    data={data}
                    textColor={'#7c7c7c'}
                  />
                </View>
              </View>

              {/*cost  */}
              <View style={styles.inputcontainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    keyboardType={'numeric'}
                    maxLength={10}
                    style={[
                      styles.subtitle,
                      { paddingLeft: 10, width: '85%', height: '100%' },
                    ]}
                    placeholder={'Minimum Cost Eg : 1,00,000 KRW'}
                  />
                </View>
                <View style={{ width: 5 }}></View>
              </View>

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


              {/*ends here */}
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
            <CheckBox
              checkedCheckBoxColor={Theme.primary}
              checkBoxColor={'#fff'}
              style={{ padding: 10, width: '85%', marginTop: 15 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                });
              }}
              isChecked={this.state.isChecked}
              rightText={'I accept the Terms and Conditions'}
              rightTextStyle={{ color: '#7c7c7c' }}
            />

            <CheckBox
              checkedCheckBoxColor={Theme.primary}
              checkBoxColor={'#fff'}
              style={{ padding: 10, width: '85%', marginTop: 15 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                });
              }}
              isChecked={this.state.isChecked}
              rightText={'I accept Privacy Policy'}
              rightTextStyle={{ color: '#7c7c7c' }}
            />




            {/* TODO: use your validation here */}
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
                SIGN UP
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 25,
              marginTop: 25,
            }}
          >
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
        </ScrollView>
      </View >
    );
  }
}
export default MerchantSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.dark,
  },
  title: {
    fontFamily: Theme.bison,
    fontSize: Theme.xl * 2,
    color: '#fff',
    marginTop: 40,
  },
  subtitle: {
    fontFamily: Theme.rubik,
    fontSize: Theme.large,
    opacity: 0.5,
    color: '#fff',
  },
  inputcontainer: {
    width: '90%',
    paddingVertical: 9,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#111212',
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
  bottomtext: {
    fontFamily: Theme.rubik,
    fontSize: Theme.large,
  },
});
