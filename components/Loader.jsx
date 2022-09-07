import {ActivityIndicator, View, Text} from 'react-native';
import styled from 'styled-components/native';

const LoaderWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoaderText = styled.Text`
  margin-top: 15px;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ActivityIndicator size='large'/>
      <LoaderText>Loading...</LoaderText>
    </LoaderWrapper>
  )
}