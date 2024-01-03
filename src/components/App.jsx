import React from 'react';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';

export function App() {
   return (
     <div
       style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         // fontSize: 40,
         color: '#010101',
       }}
     >
       <Profile {...user} />
       <Statistics title="upload stats" stats={data} />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
     </div>
   );
};

/*

*/ 
   
     