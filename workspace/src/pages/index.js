import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import classnames from 'classnames';

import { DisqusThread } from '../components';
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
              alt="핀PD Logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/FP_logo.png')}
            />
            <h1 className={styles.heroProjectTagline}>
              <span className={styles.heroProjectKeywords}>핀</span>
              (Fin, Finance, 금융)
            </h1>
            <h1 className={styles.heroProjectTagline}>
              +
              <span className={styles.heroProjectKeywords}>PD</span>
              (Product, 상품)
            </h1>
            <p className={styles.heroProjectSubTitle}>
              {tagline}
            </p>
            <div className={styles.indexCtas}>
              {/* <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/review/tier1/intro')}>
                금융상품비교검색
              </Link> */}
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/review/tier1/intro')}>
                은행별상품보기
              </Link>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('blog')}>
                금융블로그
              </Link>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('blog')}>
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
                  alt="금융상품비교검색"
                  className={styles.featureImage}
                  src={useBaseUrl('img/search.jpg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  금융상품비교검색
                </h2>
                <p className="padding-horiz--md">
                  금융상품의 수많은 어려운 조건을 쉽게 조합할 수 있는 더 스마트 한 금융 상품 찾기. 예금, 적금, 대출 등을 비교 검색하고 더 나은 결정을 하세요.
                </p>
              </div>
              <div className="col">
                <img
                  alt="은행별상품보기"
                  className={styles.featureImage}
                  src={useBaseUrl('img/review.jpg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  은행별상품보기
                </h2>
                <p className="padding-horiz--md">
                  핀PD의 각 은행별 금융상품 리뷰를 보시고 여러분의 상황에 가장 알맞은 최적의 상품을 선택하세요.
                </p>
              </div>
              <div className="col">
                <img
                  alt="금융블로그"
                  className={styles.featureImage}
                  src={useBaseUrl('img/blog.jpg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  금융블로그
                </h2>
                <p className="padding-horiz--md">
                  금융 전문가의 금융상품 분석 블로그를 통해 보다 현명한 금융상품 소비를 하세요. 적금, 예금, 대출 등 개인 금융 상품을 주제로 합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
                <img
                  alt="금융용어사전"
                  className={styles.featureImage}
                  src={useBaseUrl('img/dictionary.jpg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  금융용어사전
                </h2>
                <p className="padding-horiz--md">
                  많이 어려운 금융용어를 쉽게 찾고 이해할 수 있도록 금융거래 표준 약관 등에서 사용되는 금융용어를 쉽게 풀어서 알려드립니다.
                </p>
              </div>
              <div className="col col--4">
                <img
                  alt="Powered by 상품팩토리"
                  className={styles.featureImage}
                  src={useBaseUrl('img/factory.jpg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Powered by 상품팩토리
                </h2>
                <p className="padding-horiz--md">
                  금융상품의 정보와 공정을 표준화하고 다양한 유형의 상품을 신속하게 등록하고 검색할 수 있는 강력한 상품관리 시스템을 사용하고 있습니다.
                </p>
              </div>
              {/* <div className="col col--4">
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
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className={styles.textAlignRight}><a href="https://www.freepik.com/free-photos-vectors">Vector created by stories - www.freepik.com</a></div> */}
        <br />
        <CommentsSection />
        <br />
      </main>
    </Layout>

  );
}

const CommentsSection = () => (
  <div className="container">
    <DisqusThread />
  </div>
);

export default Home;
