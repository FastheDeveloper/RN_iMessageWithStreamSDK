import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { User } from '../../src/context/auth';
import { getUsers } from '../../src/services/userService';
import UserListItem from '../../src/component/UserListItem';

const NewChannel = () => {
    const [users,setUsers]=useState<User[]>([]);
    useEffect(()=>{
        getUsers().then((users)=>setUsers(users))
    },[])
    console.log(users,"users")
  return (
    <FlatList 
    data={users}
    renderItem={({item})=> <UserListItem user={item}/> }
    />
  )
}

export default NewChannel