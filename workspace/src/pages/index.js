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
              alt="FinProduct Logo"
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
              {/* <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/doc1')}>
                금융상품검색
              </Link> */}
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('blog')}>
                금융상품분석
              </Link>
              {/* <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('blog')}>
                금융용어사전
              </Link> */}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          {/* <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  alt="금융상품검색"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_react.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  금융상품검색
                </h2>
                <p className="padding-horiz--md">
                  Extend or customize your project's layout by reusing React.
                  Docusaurus can be extended while reusing the same header and
                  footer.
                </p>
              </div>
              <div className="col">
                <img
                  alt="금융상품분석"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_around_the_world.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  금융상품분석
                </h2>
                <p className="padding-horiz--md">
                  Localization comes pre-configured. Use Crowdin to translate
                  your docs into over 70 languages.
                </p>
              </div>
              <div className="col">
                <img
                  alt="금융용어사전"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_around_the_world.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  금융용어사전
                </h2>
                <p className="padding-horiz--md">
                  Localization comes pre-configured. Use Crowdin to translate
                  your docs into over 70 languages.
                </p>
              </div>
            </div>
          </div> */}
          <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
                <img
                  alt="금융상품분석"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_around_the_world.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  금융상품분석
                </h2>
                <p className="padding-horiz--md">
                  Localization comes pre-configured. Use Crowdin to translate
                  your docs into over 70 languages.
                </p>
              </div>
              <div className="col col--4">
                <img
                  className={styles.featureImage}
                  alt="Powered by 상품팩토리"
                  src={useBaseUrl('img/bxpf.png')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Powered by 상품팩토리
                </h2>
                <p className="padding-horiz--md">
                  금융상품의 정보와 공정을 표준화하고 다양한 유형의 상품을 신속하게 등록하고 검색할 수 있는 강력한 상품관리 시스템을 사용하고 있습니다.
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
