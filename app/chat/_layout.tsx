import {Slot,Stack} from "expo-router"
import { StreamChat } from 'stream-chat';
import { useEffect } from "react";
import {OverlayProvider,Chat} from "stream-chat-expo";
const API_KEY='c3wrkh8sxfj5'
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout(){
useEffect(() => {
  const connectUser =async()=>{
    await client.connectUser(
        {
          id: 'jlahey',
          name: 'Jim Lahey',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('jlahey'),
      );
      const channel = client.channel('livestream', 'public', {
        name:'Public',
        // image: 'https://i.imgur.com/fR9Jz14.png',
      })
      await channel.create();
  }
  
  connectUser()

  return () => {
    // cleanup
    client.disconnect();
  }
}, [])


    return  (
        <OverlayProvider>
            <Chat client={client}>
                <Stack>
                    <Stack.Screen name="index"   options={{title: "Messages",headerTitleAlign:'center',headerShadowVisible:true}}/>
                </Stack>
            </Chat>
        </OverlayProvider>
        )
    
}