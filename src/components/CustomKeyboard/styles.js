import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  key: {
    flex: 1,
    margin: 10,
    paddingVertical: 10,
    // backgroundColor: '#E9EAEC',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    // height: 70,
    // width: 70,
    borderRadius: 10,
  },
  keyText: {
    fontSize: 32,
  },
  resetKeyText: {
    fontSize: 24,
  },
});

export default styles;
