import React, {Fragment, useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader';
import PlusSvg from '../../assets/PlusSvg';
import TaskContext from '../../context/tasks/TaskContext';
import AuthContext from '../../context/auth/AuthContext';
import Item from './Item';

const Main = () => {
  const taskContext = useContext(TaskContext);
  const authContext = useContext(AuthContext);
  const {accessToken} = authContext;
  const {postTask, alltasks, deleteTask, putTask} = taskContext;

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const [openNewItem, setOpenNewItem] = useState(false);
  const [openEditItem, setOpenEditItem] = useState('');

  const handleDone = () => {
    setOpenNewItem(false);
    postTask(task, accessToken);
    setTask({...task, title: '', description: ''});
  };

  const handleDelete = id => {
    deleteTask(id, accessToken);
  };
  const handleEdit = id => {
    setOpenEditItem(id);
  };
  const handleStatus = (id, status) => {
    putTask(
      id,
      {
        status: status,
      },
      accessToken,
    );
  };

  return (
    <Fragment>
      <Image
        source={require('../../assets/Background.png')} //Change your icon image here
        style={{position: 'absolute', height: windowHeight, width: windowWidth}}
      />
      <SafeAreaView style={styles.sf_area}>
        <CustomHeader textColor={'#24252C'} text={'My To-Do'} />

        {Object.keys(alltasks).length > 0 && (
          <FlatList
            data={alltasks}
            keyExtractor={item => item.id}
            //  ListFooterComponent={renderFooter}
            // ListEmptyComponent={emptyListView}
            // ItemSeparatorComponent={renderSeparator}
            renderItem={({item}) => {
              return (
                <Item
                  openEditItem={openEditItem}
                  item={item}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleStatus={handleStatus}
                />
              );
            }}
          />
        )}

        {openNewItem && (
          <View style={styles.open_wr}>
            <TextInput
              style={{
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                backgroundColor: '#FCFAFF',
              }}
              onChangeText={text => setTask({...task, title: text})}
              value={task.title}
              placeholder="Title"
            />
            <TextInput
              multiline={true}
              style={{
                margin: 20,
                backgroundColor: '#FCFAFF',
                height: 200,
                textAlignVertical: 'top',
              }}
              onChangeText={text => setTask({...task, description: text})}
              value={task.description}
              placeholder="Description"
              numberOfLines={15}
            />

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setOpenNewItem(false)}
                style={{
                  height: 36,
                  width: 121,
                  justifyContent: 'center', //Centered vertically
                  alignItems: 'center', //Centered horizontally
                  borderRadius: 35,
                  borderColor: '#5F33E1',
                  borderWidth: 1,
                }}>
                <Text style={{color: '#5F33E1'}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDone}
                style={{
                  height: 36,
                  width: 121,
                  justifyContent: 'center', //Centered vertically
                  alignItems: 'center', //Centered horizontally
                  borderRadius: 35,
                  backgroundColor: '#5F33E1',
                  borderWidth: 1,
                }}>
                <Text style={{color: '#fff'}}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={() => setOpenNewItem(true)}
          style={{
            marginTop: 0,
            height: 63,
          }}>
          <PlusSvg />
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default Main;
