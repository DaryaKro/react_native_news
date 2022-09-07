import React from 'react';
import axios from 'axios';
import {Loader} from '../components/Loader';
import styled from 'styled-components/native';

const PostView = styled.View`
  padding: 16px;
  background-color: rgba(249, 244, 255, 0.83);
`;

const PostImage = styled.Image`
  border-radius: 16px;
  width: 100%;
  height: 240px;
  margin-bottom: 24px;
`;

const PostText = styled.Text`
  font-size: 16px;
  line-height: 22px;
`;

export const FullPostScreen = ({route, navigation}) => {
  const [post, setPost] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const {id, title} = route.params;

  const fetchPosts = () => {
    navigation.setOptions({title})
    setIsLoading(true);
    axios.get('https://6315c01d33e540a6d38364cc.mockapi.io/posts/' + id)
      .then(({data}) => {
        setPost(data);
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
    <PostView>
      <PostImage source={{uri: post.imageUrl}}/>
      <PostText>{post.text}</PostText>
    </PostView>
  );
}