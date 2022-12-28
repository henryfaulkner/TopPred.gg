import React, { useState, useRef } from "react";
import styles from '../styles/pages/index.module.scss'
import Champion from "../OOP/Models/Champion";
import { server } from "../config";
import ChampionTypeAheadSearch from '../components/ChampionTypeAheadSearch';

type Props = {
  AllChampions: Champion[];
}

const Home = (props: Props) => {
  const input_addBrewery = useRef();

  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.FadeInOne}>Calvin is a bitch</h1>
          <h1 className={styles.FadeInTwo}>So is Andrew</h1>
          <ChampionTypeAheadSearch 
                  inputReference={input_addBrewery}
                  AllChampions={props.AllChampions}
            />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  let AllChampions: Champion[] = [];
  console.log("http://localhost:3000/api/GetAllChampions")
  await fetch(`${server}/api/GetAllChampions`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res: Champion[]) => {
      AllChampions = res;
    });

  return { 
    props: {
      AllChampions: AllChampions
    },
  }
}

export default Home;