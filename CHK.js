import React from 'react';
import {Image, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#000'}}>
      <Image
        style={{height:350, width:350}}
        source={require('./assets/HEK.png')}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          color: '#fff',
          textAlign: 'center',
        }}>
        ❤CONGRATULATIONS❤   ❤HAPPY RISHTA FIXING ❤❤NAME!❤
      </Text>
    </View>
  );
};

export default App;
