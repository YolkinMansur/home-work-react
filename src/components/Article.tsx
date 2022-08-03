import { IPost } from '../interfaces/post'
import classNames from 'classnames'
import AuthorImg from './AuthorImg'
import Content from './Content'
import Published from './Published'

type Props = {post: IPost, right: boolean}
export default function Article({post, right}: Props) {
    const publishedClass  = classNames('absolute pl-4 pr-4 pb-2 left-0 bottom-0 right-0 bg-neutral-900 before:h-10 before:w-full before:absolute before:-left-0 before:-top-10 before:bg-gradient-to-t before:from-neutral-900', {
        'text-right': right
    })
  return (
    <div className='text-neutral-100 my-6 mx-auto w-1/2 flex h-[300px]  bg-neutral-900 overflow-hidden shadow-md rounded-md'>
        {right || <AuthorImg author={post.author}/>}
        <Content title={post.title} text={post.text}>
          <Published publishedClass={publishedClass} authorName={post.author.name} date={post.date}/>
        </Content>
        {right && <AuthorImg author={post.author}/>}
    </div>
  )
}   