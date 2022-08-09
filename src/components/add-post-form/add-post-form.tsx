import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addPost, fetchPosts } from '../../data/posts';
import { IPost } from '../../interfaces/post';

type Props = {
  title: string;
  text: string;
  onPreview: ({ title, text }: Record<string, string>) => void;
  setPosts: any;
};
export type FormData = {
  title: string;
  text: string;
  date: string;
};

export default function AddPostForm({
  title,
  text,
  onPreview,
  setPosts,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = (data: FormData) => {
    addPost({ ...data, id: 0 })
    setPosts([...fetchPosts()]);
    reset();
  };

  useEffect(() => {
    return () => {
      const values = getValues();
      onPreview(values);
    };
  }, []);

  return (
    <form className="flex flex-col ">
      <h2 className="text-xl font-semibold mb-2">Создайте новый пост</h2>
      <input
        placeholder="Название поста..."
        className="bg-mainDark py-2 px-4  focus:outline-none focus:ring focus:ring-mainTeal border-none"
        defaultValue={title}
        {...register('title', {
          required: 'Поле обязательно к заполнению',
          minLength: { value: 3, message: 'Минимум 3 символа' },
          onBlur: (e) => setValue('title', e.target.value.trim()),
        })}
        type="text"
        id="title"
      />
      {errors.title && (
        <small className="py-1 px-2 text-red-400">{errors.title.message}</small>
      )}

      <textarea
        placeholder="Текст поста..."
        className="bg-mainDark focus:outline-none focus:ring mt-4 focus:ring-mainLight py-2 px-4 "
        id="postText"
        defaultValue={text}
        {...register('text', {
          required: 'Поле обязательно к заполнению',
          minLength: { value: 20, message: 'Минимум 20 символов' },
          onBlur: ({ target: { value } }) => setValue('text', value.trim()),
        })}
        rows={8}
      ></textarea>
      {errors.text && (
        <small className="py-1 px-2 text-red-400">{errors.text.message}</small>
      )}
      <div className="flex items-center mt-4">
        <label htmlFor="date" className="text-base mr-2 font-semibold">
          Дата публикации
        </label>
        <input
          type="date"
          id="date"
          {...register('date', {
            required: 'Выберите дату',
          })}
          className="bg-mainDark focus:outline-none focus:ring-2 rounded-sm focus:ring-mainLight px-1"
        />
        {errors.date && (
          <small className="py-1 px-2 text-red-400">
            {errors.date.message}
          </small>
        )}
        <div className="ml-auto">
          <button
            className=" py-1 px-3 bg-mainTeal rounded-md hover:bg-mainTeal/50"
            onClick={handleSubmit(onSubmit)}
          >
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
}
