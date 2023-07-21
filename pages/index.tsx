import { FC } from "react"
import Head from "next/head"

import type { NextPage } from "next/types"

import { Card } from "src/components/Card"
import { CardAnimation } from "src/components/CardAnimation"
import { Page } from "src/components/Page"

import { env } from "src/utils/env"

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
          <p>{env.VERSION}-{env.NODE_ENV} ({env.NEXT_PUBLIC_APP_ENV})</p>
        </div>
      </Page>
    </>
  )
}

export default Home
