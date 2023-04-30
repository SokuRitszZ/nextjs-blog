import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '../styles/util.module.scss';
import styles from './index.module.scss';
import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';

/**
 * 开发环境下每次请求页面都会执行
 * 生产环境下只会在构建阶段执行一次，如果需要在每次请求的时候执行，请使用 getServerSideProps
 * 只能从“页面”的 jsx 里面 export 出去，其他地方都不行
 * @returns props
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home(props: { allPostsData: any[] }) {
  const { allPostsData } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd + ' ' + styles.container}>
        <h3 className={'text-center font-thin'}>A Frontend Developer.</h3>
        <h2>👋Hi there!</h2>
        <p>
          I am Andrew Leung, currently interning at{' '}
          <a className={'font-bold'} href="https://www.baidu.com">
            Baidu
          </a>
          .
        </p>
        <p>
          Now I am studying Frontend & Backend Technologies, target to be an
          FSD.
        </p>
        <p></p>
        <p>This blog is written via Next.js, while I am studying Next.js.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
