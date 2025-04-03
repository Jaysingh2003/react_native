import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profiles = ({navigation,route}) => {
  const {name, content} = route.params || {};
 
  return (
    <View style={styles.container}>
      <Text>Profiles</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
      <Text>{name}</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
