import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import LogoContainer from '../components/LogoContainer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EziStreat! - Home</title>
        <meta name="description" content="EziStreat Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href={"/"} passHref>
        <LogoContainer>
            <Image src="/logo.png" layout="fill" objectFit="contain" alt="ezikitchen logo"/>
          </LogoContainer>
        </Link>

        <h1 className={styles.title}>
          Streat yourself and eat at <a>EziStreat.</a>
        </h1>

        <p className={styles.description}>
          Street art meets luxurious food.
        </p>

        <div className={styles.grid}>
          <Link href="/ordernow" passHref>
            <a className={styles.card}>
              <h2>Order Now &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <Link href="/vendors" passHref>
            <a className={styles.card}>
              <h2>Vendors &rarr;</h2>
              <p>Check out our range of vendors, traversing cultures from Asia to Europe!</p>
            </a>
          </Link>

          <Link href="/beergarden" passHref>
            <a className={styles.card}>
              <h2>Beer Garden &rarr;</h2>
              <p>Check out our range of vendors, traversing cultures from Asia to Europe!</p>
            </a>
          </Link>

          <Link href="/theteam" passHref>
            <a className={styles.card}>
              <h2>The Team &rarr;</h2>
              <p>Check out our range of vendors, traversing cultures from Asia to Europe!</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
// export async function getStaticProps(context) {
//   const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
//   await delay(500).then(() => console.log('waited 3 seconds'))
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }