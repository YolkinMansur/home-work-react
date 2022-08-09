type Props = {title: string, text: string}
const PreviewPost = ({title, text}: Props) => {
  return (
    <div>
        <p className='text-sm text-white/50'>Предварительный просмотр Поста</p>
        {title || text ? <><h2 className='mt-2 text-2xl font-semibold text-mainLight py-2 px-4'>{title}</h2>
        <p className='py-2 px-4 '>{text}</p></> : <h2 className='text-center mt-5 text-2xl text-mainDark' >Пусто</h2> }
        
    </div>
  )
}

export default PreviewPost