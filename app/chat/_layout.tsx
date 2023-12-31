import {Slot,Stack} from "expo-router"
import { StreamChat } from 'stream-chat';
import { useEffect } from "react";
import {OverlayProvider,Chat} from "stream-chat-expo";
import { useAuth } from "../../src/context/auth";
import { Entypo } from '@expo/vector-icons';
import {Link} from "expo-router";
const API_KEY='c3wrkh8sxfj5'
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout(){
    const {user}=useAuth();
useEffect(() => {
  const connectUser =async()=>{
    await client.connectUser(
        {
          id: user.id.toString(),
          name: user.name,
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        user.streamToken
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
                    <Stack.Screen name="index"   options={{title: "Messages",
                    headerTitleAlign:'center',headerRight:()=>(
                        <Link href={"/chat/newChannel"}>
                        <Entypo name="new-message" size={24} color="black" />
                        </Link>
                    )
                    }}/>
                </Stack>
            </Chat>
        </OverlayProvider>
        )
    
}