import React from 'react'
import styled from 'styled-components/native'
import { api } from '../api/api'
import { Loader } from '../components/Loader'
import { View } from 'react-native'
const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  background-size: cover;
  margin-bottom: 20px;
`
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`
export default function Post({ route, navigation }) {
  const { id } = route.params
  const [post, setPost] = React.useState({
    data: {},
    loading: false,
  })
  const fetchPost = (id) => {
    setPost((prev) => ({ ...prev, loading: true }))
    api
      .getPost(id)
      .then((response) => {
        setPost((prev) => ({ ...prev, data: response }))
        navigation.setOptions({ title: response.title })
      })
      .catch((error) => {
        Alert.alert('Error', 'Error when getting Articles')
        console.log(error)
      })
      .finally(() => {
        setPost((prev) => ({ ...prev, loading: !prev.loading }))
      })
  }

  React.useEffect(() => {
    fetchPost(id)
  }, [])
  if (post.loading) return <Loader />

  return (
    <View style={{ margin: 10 }}>
      <PostImage source={{ uri: post.data.imageUrl }} />
      <PostText>{post.data.title}</PostText>
    </View>
  )
}
