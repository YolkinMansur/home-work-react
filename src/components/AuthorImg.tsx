type Props = { author: { avatarUrl: string,  name: string} };
export default function AuthorImg({ author }: Props) {
  return (
    <div className='relative before:absolute before:left-0 before:bottom-0 before:h-1/4 before:w-full  before:bg-gradient-to-t before:from-neutral-900 w-1/5 h-full shrink-0'>
      <img
        className="h-full object-cover "
        src={author.avatarUrl}
        alt={author.name}
        loading="lazy"
      />
      
    </div>
  );
}
