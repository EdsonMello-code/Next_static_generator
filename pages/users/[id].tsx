import React from 'react';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';

// import { Container } from './styles';

export interface IProps {
  user: IUser;
}

export interface IUser {
  name: string;
  id: number;
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
}

const user: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default user;
