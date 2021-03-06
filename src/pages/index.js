import { NextSeo } from 'next-seo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFileAlt, faWind, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { TextProvider } from "text-provider";
import strings from '../shared/content.json';
import config from '../next-seo.config';
import Head from 'next/head';
import Body from '../sections/Body/Body';

library.add(fab, faEnvelope, faFileAlt, faPaperPlane, faWind, faSun, faMoon);

export default function Root() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Aditya K.</title>
      </Head>
      <NextSeo {...config} />
      <TextProvider globalText={strings}>
        <Body />
      </TextProvider>
    </>
  )
}