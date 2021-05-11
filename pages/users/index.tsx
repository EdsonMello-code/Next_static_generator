import Link from 'next/link';
import React from 'react';
import { IUser } from './[id]';

type Users = IUser[];

interface IProps {
  users: Users;
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = (await response.json()) as Users;

  return {
    props: { users },
  };
}

const users: React.FC<IProps> = ({ users }) => {
  console.log(users);

  return (
    <div>
      <h1>All users</h1>
      <div>
        {users.map((user) => (
          <Link href={'/users/' + user.id} key={user.id}>
            <a>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default users;
