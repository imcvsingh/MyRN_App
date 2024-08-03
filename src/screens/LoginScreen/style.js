import {StyleSheet} from 'react-native';
import ColorConstants from '../../utils/ColorConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorConstants.primary,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default styles;
