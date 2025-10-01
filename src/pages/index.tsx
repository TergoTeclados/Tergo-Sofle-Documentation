import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img src={colorMode === "light" ? useBaseUrl('/logo/logo_black.png') : useBaseUrl('/logo/logo_white.png')} alt="Tergo Logo" className={styles.logo} />
          Tergo {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button", "button--secondary", "button--lg", styles.homeLinkBtn)}
            to="/docs/intro">
            👋 Comece aqui!
          </Link>
          <a href="https://tecladoergonomico.com.br"
            className={clsx("button", "button--secondary", "button--lg", styles.homeLinkBtn)}
          >
            Voltar ao site oficial
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Tergo Teclados`}
      description="Documentação oficial do Tergo Sofle">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
