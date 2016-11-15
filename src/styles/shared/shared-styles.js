import {StyleSheet} from 'aphrodite';
import mixins from 'stylz';

const sharedStyles = StyleSheet.create({
  Wrapper: {
    maxWidth: 900,
    width: '100%',
    margin: 'auto',
    ...mixins.padding.horizontal(24)
  },
  Page: {
    ...mixins.padding.vertical(50)
  }
});

export default sharedStyles;