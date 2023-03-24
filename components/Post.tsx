import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: NextPage<{ post: Props }> = ({ post }: any) => {
  return (
    <div className='bg-teal-600 p-4 rounded-md'>
      <h2 className='text-3xl font-semibold text-white'>{post.title}</h2>
      <p className='text-base text-white mt-2'>
        {post.body.slice(0, 40) + '...'}
      </p>
      <Link
        href={`/posts/${post.id}`}
        className='bg-teal-200 py-1 px-4 mt-4 inline-block rounded-sm'
      >
        Read more
      </Link>
    </div>
  );
};

export default Post;
