import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Dropdown } from 'react-native-material-dropdown';
import Slider from "react-native-slider";
import { TextInput } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

const img =
  'https://images.pexels.com/photos/632043/pexels-photo-632043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

class UserMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      date: 'Pick Date',
      time: 'Pick Time',
      distance: 3,

    };
  }



  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  handleDatePicked = (date) => {
    this.hideDateTimePicker();
    this.formatDate(date);
  };

  formatDate = (date) => {
    return this.setState({
      date: `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`
    });
  };

  showDateTimePicker2 = () => {
    this.setState({ isDateTimePickerVisible2: true });
  };

  hideDateTimePicker2 = () => {
    this.setState({ isDateTimePickerVisible2: false });
  };

  handleDatePicked2 = (time) => {
    this.hideDateTimePicker2();
    this.formatDate2(time)
  };

  formatDate2 = (time) => {
    return this.setState({ time: `${time.getHours()}:${time.getMinutes()}` });
  };


  onValueChange(value) {
    this.setState({ distance: value });
  }



  render() {




    //TODO: replace with your merchant types
    let data = [
      {
        value: 'Room',
      },
      {
        value: 'Bar',
      },
      {
        value: 'Saloon',
      },
    ];


    const { navigation } = this.props

    return (
      <View style={styles.container}>

        {/* header starts here */}


        <ImageBackground imageStyle={{ opacity: 0.5 }} source={{ uri: img }} style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Feather name='menu' size={24} color={'#fff'} />
          </TouchableOpacity>
          <Text style={styles.title}>Welcome User</Text>
          <TouchableOpacity>

          </TouchableOpacity>
        </ImageBackground>




        <View style={styles.body}>
          <ScrollView
            contentContainerStyle={{ width: '100%', alignItems: 'center' }}>


            <Dropdown
              baseColor={'#fff'}
              containerStyle={{
                width: '90%',
                height: 65,
                marginBottom: 10
              }}
              label="Merchant Type"
              data={data}
              textColor={'#7c7c7c'}
            />


            {/* entry */}
            <View style={styles.entry}>
              <Text style={styles.placeholder}>Date</Text>
              {/* this is the date picker */}
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.valueplaceholder}>{this.state.date}</Text>
                <TouchableOpacity onPress={this.showDateTimePicker}>
                  <Feather name="edit" size={20} color={Theme.primary} />
                </TouchableOpacity>
              </View>
            </View>


            {/* entry */}
            <View style={styles.entry}>
              <Text style={styles.placeholder}>Time</Text>
              {/* this is the time picker */}
              <DateTimePicker
                mode={'time'}
                isVisible={this.state.isDateTimePickerVisible2}
                onConfirm={this.handleDatePicked2}
                onCancel={this.hideDateTimePicker2}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.valueplaceholder}>{this.state.time}</Text>
                <TouchableOpacity onPress={this.showDateTimePicker2}>
                  <Feather name="edit" size={20} color={Theme.primary} />
                </TouchableOpacity>
              </View>
            </View>



            {/* entry */}
            <View style={[styles.entry, { flexDirection: 'column', alignItems: 'flex-start' }]}>
              <Text style={[styles.placeholder, { paddingBottom: 10 }]}>Distance</Text>
              <Text style={[styles.placeholder, { paddingBottom: 0, color: Theme.primary }]}>{this.state.distance}/KM</Text>
              <Slider
                minimumValue={3}
                maximumValue={50}
                minimumTrackTintColor={Theme.primary}
                maximumTractTintColor={Theme.primary}
                step={7}
                value={3}
                onValueChange={value => this.onValueChange(value)}
                style={styles.slider}
                thumbTintColor={Theme.primary}
                trackStyle={{ backgroundColor: '#1c1c1c', height: 2 }}
              />
            </View>



            {/* entry */}
            <View style={styles.entry}>
              <Text style={styles.placeholder}>Price</Text>
              <TextInput keyboardType={'numeric'} maxLength={10} placeholder="Eg.100,000 KRW" style={{ width: '25%', fontFamily: Theme.rubik, color: '#fff' }} />
            </View>


            {/* entry */}
            <View style={styles.entry}>
              <Text style={styles.placeholder}>People</Text>
              <TextInput maxLength={10} placeholder="Eg.5" style={{ fontFamily: Theme.rubik, color: '#fff' }} />
            </View>



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


            {/* TODO: MAPVIEW INTEGRATION REQUIRED HERE */}
            <MapView style={styles.map} />


            {/* ending of the scroll view */}
          </ScrollView>
        </View>
        <View style={styles.footer}>


          <TouchableOpacity
            onPress={() => alert('FUNCTION HERE')}
            style={styles.btn}
          >
            <Text
              style={{
                fontFamily: Theme.rubikbold,
                fontSize: Theme.large,
              }}
            >
              MATCHING REQUEST
  </Text>
          </TouchableOpacity>
        </View>

      </View >
    );
  }
}
export default UserMain;

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
    justifyContent: 'center'
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
    backgroundColor: Theme.primary,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '95%',
    height: 150,
    marginVertical: 15
  }
});
