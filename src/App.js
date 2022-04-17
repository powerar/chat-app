import React from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29sZC1ib251cy01IiwiZXhwIjoxNjUwMjI3NjUxfQ.89hLdE682IMxmAP3dx6pzHF0JPU3fqEf-1sh-SVBcBE';

chatClient.connectUser(
  {
    id: 'cold-bonus-5',
    name: 'cold',
    image: 'https://getstream.io/random_png/?id=cold-bonus-5&name=cold',
  },

  userToken
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['cold-bonus-5'],
});

const App = () => (

  
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
