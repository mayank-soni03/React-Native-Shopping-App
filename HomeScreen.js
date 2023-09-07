import { StatusBar } from 'expo-status-bar';

import {
  Text, View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  BellAlertIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";

import FlatListDemo from './Database';
import FlatListDemo1 from './Database1';
import FlatListDemo2 from './Database2';
import styles from './HomeScreenCSS';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground style={styles.BGImage}
        source={require('./Icons/Background Image (2).png')}
        blurRadius={'1.5'}>

        <View style={styles.SafeView1}>
          <UserCircleIcon style={styles.UserIcon} />
          <Text style={styles.SafeText2}>My Cart</Text>
          <BellAlertIcon style={styles.BellIcon} />
        </View>
        <View style={styles.SafeView2}>
          <View style={styles.SafeView3}>
            <TextInput style={styles.TextInput}
              placeholder='Search'></TextInput>
            <TouchableOpacity>
              <MagnifyingGlassIcon size={25}
                strokeWidth={2} color={'yellow'}
                style={styles.MagnifyingGlass} />
            </TouchableOpacity>
          </View>

        </View>

      </ImageBackground>

      <View
        style={{
          marginTop: 170, marginLeft: 5,
          width: '100%', marginRight: 5
        }}>

        <Text style={styles.TextInput2}>
          "Diwali Special Offer Starts on 01/Nov"
        </Text>
        {/* Wardrobe */}
        <View style={styles.SafeView4}>
          <Text style={styles.SafeText3}>Wardrobe</Text>
        </View>

        <View style={styles.SafeView5}>
          <FlatListDemo />
        </View>

        {/* Eletronics */}

        <View style={styles.SafeView4}>
          <Text style={styles.SafeText3}>Electronics</Text>
        </View>

        <View style={styles.SafeView5}>
          <FlatListDemo1 />
        </View>

        {/* Shoes  */}
        <View style={styles.SafeView4}>
          <Text style={styles.SafeText3}>Shoes</Text>
        </View>

        <View style={styles.SafeView5}>
          <FlatListDemo2 />
        </View>
      </View>

    </View>
  );
}

