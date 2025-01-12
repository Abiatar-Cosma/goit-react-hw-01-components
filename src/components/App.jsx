import React from 'react';
import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';

export const App = () => {
  return (
    <div>
      {/* Componenta Profile */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      {/* Componenta Statistics */}
      <Statistics title="Upload stats" stats={data} />

      {/* Afișăm lista de prieteni */}
      <FriendList friends={friends} />
    </div>
  );
};