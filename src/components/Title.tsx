import { Fragment } from 'react'

type Props = {brand: string, model: string, animateClass: string}
export default function Title({brand, model, animateClass}: Props) {
  return (
    <Fragment>
        <p className={`whitespace-nowrap text-7xl font-extrabold transition-all duration-500 ${animateClass}`}>
        {model.toLocaleUpperCase()}
      </p>
    
      <p className={`text-3xl font-extrabold transition-all duration-500 ${animateClass}`}>{brand.toLocaleUpperCase()}</p>
    </Fragment>
  )
}