import { useEffect, useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

interface IDataPokemon {
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  url: string;
}

export default function Home(props) {
  const [pokemons, setPokemon] = useState<IDataPokemon[]>([]);

  useEffect(() => {
    console.log(props);
    // setPokemon(props.pokemon);
  }, []);

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>

      <div>
        {/* {pokemons.map((pokemon) => (
          <div>
            <h1 key={pokemon.pokemon.name}>{pokemon.pokemon.name}</h1>
            <Image src={pokemon.pokemon.url} width={200} height={200} />
          </div>
        ))} */}
      </div>
      <Link href="/Home">Click</Link>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://pokeapi.co/api/v2/ability/7');
  const pokemons = await data.json();

  let p = [];

  const urlPokemons = pokemons.pokemon.map(async (pokemon) => {
    pokemon.pokemon.url;
  });

  console.log(p);

  // console.log(urlPokemons);

  return {
    props: {
      pokemons: p,
    },
  };
}
