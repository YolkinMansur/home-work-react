type Props = {publishedClass: string, authorName: string, date: string}
export default function Published({publishedClass, authorName, date}: Props) {
  return (
    <div className={publishedClass}>
        <p className="text-blue-400 ">{authorName}</p>
        <p className="text-gray-500">{date}</p>
      </div>
  )
}