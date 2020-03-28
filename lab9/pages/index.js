import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.css'

const Navigation = () => (
  <>
    <Head>
      <title>Home | Lab 9</title>
    </Head>
    <div className={styles.nav}>
      <Link href='/idsearch'>
        <a className={styles.navLink}>ID SEARCH</a>
      </Link>
      <br />
      <Link href='namesearch'>
        <a className={styles.navLink}>NAME SEARCH</a>
      </Link>
      <br />
      <Link href='typesearch'>
        <a className={styles.navLink}>TYPE SEARCH</a>
      </Link>
    </div>
  </>
)

export default Navigation
