import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const Item = ({item, handleDelete, openEditItem, handleEdit, handleStatus}) => {
  return (
    <View
      style={[
        {
          height: item.id == openEditItem ? 100 : 63,
        },
        styles.item_wrapper,
      ]}>
      <Image
        source={
          item?.status == 'pending'
            ? require('../../assets/ellips_pending.png')
            : item?.status == 'done'
            ? require('../../assets/ellipse.png')
            : require('../../assets/Ellipse_red.png')
        } //Change your icon image here
        style={styles.img}
      />
      <View style={styles.txt_wr}>
        <View>
          <Text style={styles.txt_header}>{item?.title}</Text>
          <Text style={styles.txt_cont}>{item?.description}</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => handleEdit(item.id)}
            style={{
              height: 63,
            }}>
            <Image
              source={require('../../assets/Edit.png')} //Change your icon image here
              style={{marginRight: 15, height: 24, width: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDelete(item.id)}
            style={{
              height: 63,
            }}>
            <Image
              source={require('../../assets/Delete.png')} //Change your icon image here
              style={{height: 24, width: 24}}
            />
          </TouchableOpacity>
        </View>
      </View>
      {item.id == openEditItem && (
        <View style={styles.open}>
          <TouchableOpacity
            onPress={() => handleStatus(item.id, 'pending')}
            style={styles.st_pending}>
            <Text>Penging</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleStatus(item.id, 'done')}
            style={styles.st_done}>
            <Text style={{color: '#fff'}}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleStatus(item.id, 'wontdo')}
            style={styles.st_wont}>
            <Text>Won't do</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Item;
