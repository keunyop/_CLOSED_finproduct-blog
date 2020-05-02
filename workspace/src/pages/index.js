import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

// import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import classnames from 'classnames';

import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;

  return (
    <Layout
      permalink="/"
      title={tagline}
      description={customFields.description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo}
              src={useBaseUrl('img/FP_logo.png')}
            />
            <h1 className={styles.heroProjectTagline}>
              <span className={styles.heroProjectKeywords}>핀</span>
              (Fin, Finance, 금융)
            </h1>
            <h1 className={styles.heroProjectTagline}>
              +
              <span className={styles.heroProjectKeywords}>프로덕트</span>
              (상품)
            </h1>
            <p className={styles.heroProjectSubTitle}>
              {tagline}
            </p>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/introduction')}>
                금융상품검색
              </Link>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/introduction')}>
                금융상품분석
              </Link>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/introduction')}>
                금융용어사전
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="Powered by MDX"
                  src={useBaseUrl('img/undraw_typewriter.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Powered by Markdown
                </h2>
                <p className="padding-horiz--md">
                  Save time and focus on your project's documentation. Simply
                  write docs and blog posts with Markdown/MDX and Docusaurus
                  will publish a set of static HTML files ready to serve. You
                  can even embed JSX components into your Markdown thanks to
                  MDX.
                </p>
              </div>
              <div className="col">
                <img
                  alt="Built Using React"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_react.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Built Using React
                </h2>
                <p className="padding-horiz--md">
                  Extend or customize your project's layout by reusing React.
                  Docusaurus can be extended while reusing the same header and
                  footer.
                </p>
              </div>
              <div className="col">
                <img
                  alt="Ready for Translations"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_around_the_world.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Ready for Translations
                </h2>
                <p className="padding-horiz--md">
                  Localization comes pre-configured. Use Crowdin to translate
                  your docs into over 70 languages.
                </p>
              </div>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
                <img
                  alt="Document Versioning"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_version_control.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Document Versioning
                </h2>
                <p className="padding-horiz--md">
                  Support users on all versions of your project. Document
                  versioning helps you keep documentation in sync with project
                  releases.
                </p>
              </div>
              <div className="col col--4">
                <img
                  alt="Document Search"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_algolia.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Content Search
                </h2>
                <p className="padding-horiz--md">
                  Make it easy for your community to find what they need in your
                  documentation. We proudly support Algolia documentation
                  search.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
