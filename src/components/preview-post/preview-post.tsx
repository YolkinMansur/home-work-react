type Props = {title: string, text: string}
const PreviewPost = ({title, text}: Props) => {
  return (
    <div>preview-post
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default PreviewPost