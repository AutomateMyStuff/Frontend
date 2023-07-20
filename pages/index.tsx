import { FC } from "react"
import Head from "next/head"

import type { NextPage } from "next/types"

import { Card } from "src/components/Card"
import { CardAnimation } from "src/components/CardAnimation"
import { Page } from "src/components/Page"

import { version } from '../package.json';

const nodeEnv = process.env.NODE_ENV;
const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

console.log('appEnv', appEnv)

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>Next Social Login</title>
      </Head>
      <Page>
        <Card>
          <CardAnimation />
        </Card>
        <div style={{ position: "absolute", bottom: 20 }}>
          <p>{version}-{nodeEnv} ({appEnv})</p>
        </div>
      </Page>
    </>
  )
}

export default Home
