type Props = {
    image: string,
    animateClass: string
}
export default function Image({image, animateClass}: Props) {
  return (
    <img
          className={`absolute z-10 -right-5 top-[55%] -translate-y-1/2 w-[150%] object-cover max-w-none transition-all duration-500 ${animateClass}`}
          src={image}
          alt=""
        />
  )
}