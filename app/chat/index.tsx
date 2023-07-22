import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { ChannelList,Channel, MessageList, MessageInput } from 'stream-chat-expo'

import { useRouter } from 'expo-router'
const ChatScreen = () => {
    
    const router =useRouter();
    // if(channel){
    //    
    // }
  return (
    <View style={{flex:1,}}>
      <ChannelList onSelect={(channel)=>router.push(`/chat/channel/${channel.id}`)}/>
    </View>
  )
}

export default ChatScreen