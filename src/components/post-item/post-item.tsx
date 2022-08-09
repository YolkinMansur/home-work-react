type Props = {
  title: string;
  text: string;
  date: string;
};
export default function PostItem({ title, text, date }: Props) {
  return (
    <div className="ring ring-mainNavy flex flex-col  my-7  rounded-lg">
      <div className="px-5 py-4 ">
        <h2 className="text-mainLight text-xl font-bold mb-3">{title}</h2>
        <p className="text-current tracking-wide">{text}</p>
      </div>
      <div className="mt-2 bg-mainNavy w-full  px-5 py-1">
        <p className='text-sm text-white/70'>25 октября 2020</p>
      </div>
    </div>
  );
}
