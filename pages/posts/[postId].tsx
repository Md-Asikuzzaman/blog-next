import { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Details: NextPage<{ post: Props }> = ({ post }: any) => {
  return (
    <div className='container'>
      <h1 className='text-4xl font-semibold py-4 mb-3 text-center text-teal-600'>
        Post Details page...
      </h1>
      <div className='bg-teal-600 p-4 rounded-md'>
        <h2 className='text-3xl font-semibold text-white'>
          ID {post.id}: {post.title}
        </h2>
        <p className='text-base text-white mt-2'>{post.body}</p>
        <Link
          href={`/posts/`}
          className='bg-teal-200 py-1 px-4 mt-4 inline-block rounded-sm'
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.postId;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!post) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default Details;

// export type GetStaticProps = (ctx: {
//   params?: ParsedUrlQuery
//   preview?: boolean
//   previewData?: any
// })
