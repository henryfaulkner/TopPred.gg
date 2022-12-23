import styles from '../styles/pages/index.module.scss'

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.FadeInOne}>Calvin is a bitch</h1>
          <h1 className={styles.FadeInTwo}>So is Andrew</h1>
        </div>
      </main>
    </>
  )
}

export default Home;