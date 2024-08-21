import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item_wrapper: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 10,
    position: 'relative',
  },
  img: {
    top: 5,
    left: 5,
    position: 'absolute',
    height: 16,
    width: 16,
  },
  txt_wr: {
    width: '100%',
    flex: 1,
    paddingTop: 5,
    paddingLeft: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  txt_header: {
    fontWeight: '400',
    fontSize: 9,
    color: '#6E6A7C',
  },
  txt_cont: {
    fontWeight: '400',
    fontSize: 14,
    color: '#24252C',
  },
  open: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  st_pending: {
    padding: 7,
    borderWidth: 1,
    borderColor: '#FCBF49',
    borderRadius: 15,
  },
  st_done: {
    padding: 7,
    backgroundColor: '#588157',
    borderWidth: 1,
    borderColor: '#588157',
    borderRadius: 15,
  },
  st_wont: {
    padding: 7,
    borderWidth: 1,
    borderColor: '#D62828',
    borderRadius: 15,
  },
  sf_area: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  open_wr: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    backgroundColor: '#fff',
  },
});

export default styles;
