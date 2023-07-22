import { View, Text } from 'react-native'
import React from 'react'
import { User } from '../context/auth'

const UserListItem = ({user}:{user:User}) => {
  return (
    <View style={{
        backgroundColor:'white',
        margin:5,
        padding:10,
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
            },
        shadowOpacity:0.25,
        shadowRadius:10,
        elevation:5
        
    }}>
      <Text>{user.name}</Text>
    </View>
  )
}

export default UserListItem