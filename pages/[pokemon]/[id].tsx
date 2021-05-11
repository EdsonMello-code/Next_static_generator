import React from 'react';
import { useRouter } from 'next/router';

// import { Container } from './styles';

// export async function getStaticPaths({ params }) {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await response.json();

//   return

// }

const pokemon: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
      <h1>{router.query.pokemon}</h1>
    </div>
  );
};

export default pokemon;
