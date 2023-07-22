import { View, Text, ActivityIndicator } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useLocalSearchParams } from 'expo-router'
import {Channel as ChannelType} from 'stream-chat'
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo'

const ChannelScreen = () => {
    const [channel,setChannel]=useState<ChannelType>()
    const {id} =useLocalSearchParams();
    const {client}=useChatContext();
    useEffect(() => {
      const fetchChannel =async()=>{
        const _id=typeof id ==='string' ?  id :  id[0] 
      const channels=await  client.queryChannels({id:{$eq:_id}})
      setChannel(channels[0])
      console.log(channels)
        }
    
        fetchChannel()
    }, [id])
    
    if(!channel){
        return <ActivityIndicator/>
    }
    
    return (
                <Channel channel={channel}>
                    <MessageList/>
                    <MessageInput/>
                </Channel>
            )
}

export default ChannelScreen