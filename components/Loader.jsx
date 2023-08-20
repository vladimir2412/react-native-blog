import { ActivityIndicator, Text } from 'react-native'
import styled from 'styled-components/native'
const View = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
      <Text
        style={{
          marginLeft: 10,
          marginTop: 15,
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        Loading...
      </Text>
    </View>
  )
}
