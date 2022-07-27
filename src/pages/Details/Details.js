import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavorite,
  favoriteSelectors,
  deleteFavorite,
} from '../../redux/favoritesSlice';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import styles from './Details.styles';

export default function Details({route}) {
  const favorites = useSelector(favoriteSelectors.selectAll);
  const dispatch = useDispatch();
  const {id} = route.params;
  const {error, data, loading} = useFetch(Config.API_URL + `/${id}`);

  const source = {
    html: `${data.contents}`,
  };

  if (error) {
    <Error />;
  }

  if (loading) {
    <Loading />;
  }

  const item = favorites.map(item => item.id);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.locations_container}>
        <Text style={styles.locationsTitle}>Locations: </Text>
        <Text style={styles.locations}>{data.name}</Text>
      </View>
      <View style={styles.level_container}>
        <Text style={styles.levelTitle}>Job Level: </Text>
        <Text style={styles.level}>{data.name}</Text>
      </View>
      <Text style={styles.detail}>Job Detail</Text>
      <ScrollView style={styles.content_container}>
        <RenderHTML
          baseStyle={{
            marginHorizontal: 10,
            color: '#000',
            fontSize: 14,
          }}
          contentWidth={Dimensions.get('window').width}
          source={source}
        />
      </ScrollView>

      <View style={styles.button_group}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(data.refs.landing_page)}>
          <Icon name="md-arrow-redo-sharp" size={20} color="#fff" />
          <Text style={{color: '#fff', fontSize: 16}}> Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={item.includes(data.id) ? styles.button_remove : styles.button}
          onPress={
            item.includes(data.id)
              ? () => dispatch(deleteFavorite(data.id))
              : () => dispatch(addFavorite(data))
          }>
          {item.includes(data.id) ? (
            <>
              <Icon name="ios-trash" size={20} color="#166e4f" />
            </>
          ) : (
            <>
              <Icon name="star" size={16} color="#fff" />
            </>
          )}
          <Text
            style={
              item.includes(data.id)
                ? styles.remove_text
                : styles.favourite_text
            }>
            {item.includes(data.id) ? ' Remove' : ' Favorite'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
