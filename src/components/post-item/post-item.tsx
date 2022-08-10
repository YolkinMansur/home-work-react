import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchPosts, removePost } from '../../data/posts';



function formatDate(dateString: string) {
  let date = new Date(dateString);
  let formatter = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return formatter.format(date)
}

type Props = {
  title: string;
  text: string;
  date: string;
  id: number;
  setPosts: any;
};
export default function PostItem({ title, text, date, id, setPosts }: Props) {
  function deletePost(id: number) {
    removePost(id);
    setPosts([...fetchPosts()]);
  }
  return (
    <div className="ring ring-mainNavy flex flex-col  my-7  rounded-lg">
      <div className="px-5 py-4 ">
        <h2 className="text-mainLight text-xl font-bold mb-3">{title}</h2>
        <p className="text-current tracking-wide">{text}</p>
      </div>
      <div className="mt-2 bg-mainNavy w-full  px-5 py-1 flex items-center">
        <p className="text-sm text-white/70">{formatDate(date)}</p>
        <div className="ml-auto">
          <FontAwesomeIcon
            icon={['fas', 'thumbs-up']}
            fixedWidth
            className="text-mainDark cursor-pointer hover:text-mainTeal "
            title="Нравиться"
          />
          <FontAwesomeIcon
            icon={['fas', 'pen-to-square']}
            fixedWidth
            className="text-mainDark cursor-pointer hover:text-mainTeal ml-2"
            title="Изменить"
          />
          <FontAwesomeIcon
            icon={['fas', 'trash']}
            fixedWidth
            className="text-mainDark cursor-pointer hover:text-mainTeal ml-2"
            title="Удалить"
            onClick={() => deletePost(id)}
          />
        </div>
      </div>
    </div>
  );
}
