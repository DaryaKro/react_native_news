import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(242, 224, 255, 0.83);
`;

const PostImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  justify-content: flex-start;
  flex: 1;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 13px;
  color: rgba(181, 153, 206, 0.83);
  margin-top: 4px;
`;

const truncateTitle = (str) => {
  if(str.length >= 48) {
    return str.substring(0, 48) + '...';
  }

  return str;
}

export const Post = ({ title, imageUrl, createdAt }) => (
  <PostView>
    <PostImage source={{uri: imageUrl}}/>
    <PostDetails>
      <PostTitle>{truncateTitle(title)}</PostTitle>
      <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
    </PostDetails>
  </PostView>
)
