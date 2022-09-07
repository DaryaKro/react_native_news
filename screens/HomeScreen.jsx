import React from 'react';
import axios from 'axios';
import {FlatList, RefreshControl, StatusBar, TouchableOpacity, View} from 'react-native';
import {Post} from '../components/Post';
import {Loader} from '../components/Loader';

export const HomeScreen = ({navigation}) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://6315c01d33e540a6d38364cc.mockapi.io/posts')
      .then(({data}) => {
        setItems(data);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loader/>
  }

  return (
    <View style={{ backgroundColor: 'rgba(249, 244, 255, 0.83)' }}>
      <FlatList refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({item}) =>
                  <TouchableOpacity onPress={() => navigation.navigate('Post', {id: item.id, title: item.title})}>
                    <Post title={item.title}
                          imageUrl={item.imageUrl}
                          createdAt={item.createdAt}
                    />
                  </TouchableOpacity>}
      />
    </View>
  );
}