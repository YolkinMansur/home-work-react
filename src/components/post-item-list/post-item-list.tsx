import { IPost } from '../../interfaces/post';
import PostItem from '../post-item/post-item';

type Props = {posts: IPost[], setPosts: any};
export default function PostItemList({posts, setPosts}: Props) {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-[900px] mt-7  mx-auto">
        <h2 className="text-2xl font-bold">Количество постов {posts.length}</h2>
        {posts.map(({ id, ...post }: IPost) => (
          <PostItem key={id} {...post} id={id} setPosts={setPosts}/>
        ))}
      </div>
    </div>
  );
}
