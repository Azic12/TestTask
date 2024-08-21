import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const NewItem = () => {
  return (
    <View style={styles.mainViev}>
      <Text style={{marginTop: 10}}>client</Text>
      <Text style={styles.clientText}>+phone_number</Text>
      <Text style={styles.clientText}>address</Text>
    </View>
  );
};

export default NewItem;
