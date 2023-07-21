import { FC, useState, useEffect } from "react"
import Head from "next/head"

import type { NextPage } from "next/types"

import { Card } from "src/components/Card"
import { CardAnimation } from "src/components/CardAnimation"
import { Page } from "src/components/Page"
import getConfig from 'next/config';

import {version} from 'package.json';

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
          <p>{version}-{getConfig().publicRuntimeConfig['NODE_ENV']} ({getConfig().publicRuntimeConfig['APP_ENV']})</p>
        </div>
      </Page>
    </>
  )
}

export default Home
