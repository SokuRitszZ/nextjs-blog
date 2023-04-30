import Layout from '@/components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Date from '@/components/date';

/**
 * 构建所有动态路由
 * @returns {}
 */
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // 没有此动态路由时如何处理，如果是 true 仍然返回页面但是会报错
  };
}

/**
 * 给出提供 static props 的方法
 * @param {params}
 * @returns
 */
export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: any }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={'text-3xl'}>{postData.title}</h1>
      <h2 className={'text-2xl text-gray-700'}>{postData.id}</h2>
      <Date dateString={postData.date} />
      <div
        dangerouslySetInnerHTML={{
          __html: postData.contentHTML,
        }}
      />
    </Layout>
  );
}
