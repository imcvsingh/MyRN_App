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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 32,
  },
  resetKeyText: {
    fontSize: 24,
  },
});

export default styles;
