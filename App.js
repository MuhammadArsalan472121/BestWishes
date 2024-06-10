// In App.js in a new project

import * as React from 'react';
import {ImageBackground, Image, View, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Image
        style={{height: 350, width: 350}}
        source={require('./assets/HEK.png')}
      />
      <Text style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: '#f00',
          textAlign: 'center',
        }}>Click Me!👇</Text>
      <Text
        onPress={() => navigation.navigate('Details')}
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          color: '#fff',
          textAlign: 'center',
        }}>
        ❤CONGRATULATIONS❤
      </Text>
      <Text
        onPress={() => navigation.navigate('Details')}
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          color: '#fff',
          textAlign: 'center',
        }}>
        ❤HAPPY EventName❤
      </Text>
      <Text
        onPress={() => navigation.navigate('Details')}
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          color: '#fff',
          textAlign: 'center',
        }}>
        ❤Name!❤
      </Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#000',
        justifyContent: 'center', 
      }}>
      <ScrollView>
        <Image
          style={{
            alignSelf:'center',
            height: 597,
            width: 385,
            borderWidth: 5,
            borderColor: '#000',
            borderRadius: 100,
            marginBottom:5
          }}
          source={require('./assets/1.jpg')}
        />
        <Image
          style={{
            alignSelf:'center',
            height: 808,
            width: 390,
            borderWidth: 5,
            borderColor: '#000',
            borderRadius: 100,
            marginBottom:5
          }}
          source={require('./assets/2.jpg')}
        />
        <Image
          style={{
            height: 808,
            width: 385,
            borderWidth: 5,
            borderColor: '#000',
            borderRadius: 100,
            marginBottom:5
          }}
          source={require('./assets/3.jpg')}
        />
        <Image
          style={{
            height: 500,
            width: 385,
            borderWidth: 5,
            borderColor: '#000',
            borderRadius: 100,
            marginBottom:5
          }}
          source={require('./assets/4.jpg')}
        />
        <Image
          style={{
            height: 400,
            width: 385,
            borderWidth: 5,
            borderColor: '#000',
            borderRadius: 100,
            marginBottom:5
          }}
          source={require('./assets/5.jpg')}
        />
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'HAPPY RISHTA FIXING', headerTintColor: '#f00'}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{title: 'HAPPY RISHTA FIXING', headerTintColor: '#f00'}}
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
