import Post from '@/components/Post';
import { NextPage, GetServerSideProps } from 'next';

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: NextPage<{ posts: Props[] }> = ({ posts }: any) => {
  return (
    <div className='container'>
      <h1 className='text-4xl font-semibold py-4 mb-3 text-center text-teal-600'>
        All Posts...
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {!posts.length
          ? 'Loading'
          : posts.map((post: Props) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  if (!posts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
