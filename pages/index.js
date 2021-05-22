import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CenterLayout from '../components/center-layout'
import StackLayout from '../components/stack-layout'
import Card from '../components/card'
import theme from '../config/theme'

const cards = [
  { title: 'Card1' },
  { title: 'Card2' },
  { title: 'Card3' },
  { title: 'Card4' },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenterLayout>
        <StackLayout spacing={theme.spacing.m}>
          {cards.map(({ title }, i) => (
            <Card hasPadding hasShadow key={i}>
              {title}
            </Card>
          ))}
        </StackLayout>
      </CenterLayout>
    </div>
  )
}
