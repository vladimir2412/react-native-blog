import React, { useEffect } from 'react'
import { Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native'
import { PostCard } from '../components/PostCard'
import { api } from '../api/api'
import { Loader } from '../components/Loader'
export default function Home({ navigation }) {
  const [articles, setArticles] = React.useState({
    data: [],
    loading: false,
  })
  const fetchArticles = () => {
    setArticles((prev) => ({ ...prev, loading: true }))
    api
      .getPosts()
      .then((response) => {
        setArticles((prev) => ({ ...prev, data: response }))
      })
      .catch((error) => {
        Alert.alert('Error', 'Error when getting Articles')
        console.log(error)
      })
      .finally(() => {
        setArticles((prev) => ({ ...prev, loading: !prev.loading }))
      })
  }
  useEffect(fetchArticles, [])

  if (articles.loading) {
    return <Loader />
  }
  return (
    <FlatList
      data={articles.data}
      refreshControl={<RefreshControl refreshing={articles.loading} />}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Post', { id: item.id })}
        >
          <PostCard
            key={item.id}
            createdAt={item.createdAt}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        </TouchableOpacity>
      )}
    />
  )
}
