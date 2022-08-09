import classNames from 'classnames';
import { useState } from 'react';
import AddPostForm from '../add-post-form/add-post-form';
import PreviewPost from '../preview-post/preview-post';

let btnClassActive =
  'rounded-t-lg mr-2 py-1 px-3 hover:text-mainLight hover:bg-mainNavy bg-mainNavy';
let btnClassNoActive =
  'rounded-t-lg mr-2 py-1 px-3 hover:text-mainLight hover:bg-mainNavy/60 bg-mainNavy/50 text-white/50';

type Props = {};
export default function CreatePostPanel({}: Props) {
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('')

const onPreview = ({title, postText}: Record<string, string>) => {
    setTitle(title)
    setText(postText)
}

  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-full w-[900px] mx-auto">
        <button
          className={preview ? btnClassNoActive : btnClassActive}
          onClick={() => setPreview(false)}
        >
          Редактировать
        </button>
        <button
          className={preview ? btnClassActive : btnClassNoActive}
          onClick={() => setPreview(true)}
        >
          Предпросмотр
        </button>
      </div>
      <div className="bg-mainNavy max-w-full w-[900px] min-w-max mx-auto p-5 rounded-r-lg rounded-b-lg">
        {preview ? 
        <PreviewPost title={title}  text={text}/> : <AddPostForm title={title}  text={text} onPreview={onPreview}/> }
      </div>
    </div>
  );
}