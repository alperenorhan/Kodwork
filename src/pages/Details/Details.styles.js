import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#36474f',
  },
  locations_container: {
    flexDirection: 'row',
  },
  locationsTitle: {
    fontWeight: 'bold',
    color: '#ee5654',
  },
  locations: {
    fontWeight: 'bold',
  },
  level_container: {
    flexDirection: 'row',
  },
  levelTitle: {
    fontWeight: 'bold',
    color: '#ee5654',
  },
  level: {
    fontWeight: 'bold',
  },
  detail: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#36474f',
  },
  button_group: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#166e4f',
    backgroundColor: '#166e4f',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  favourite_text: {
    color: '#fff',
    fontSize: 16,
  },
  button_remove: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#166e4f',
    backgroundColor: '#fff',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  remove_text: {
    color: '#166e4f',
    fontSize: 16,
  },
});
