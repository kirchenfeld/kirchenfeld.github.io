import { FunctionComponent } from 'react'

type CardProps = {
  title: string
}

const Card: FunctionComponent<CardProps> = ({title, children}) => {
  return (
    <>
        <div className='flex flex-col w-64 h-min border-2 border-black '>
            <div className='flex bg-pink-dark px-1'>
                <h3 className='text-white'>{title.toUpperCase()}</h3>
                <span className='grow'></span>
                <h3 className='text-white'>X</h3>
            </div>
            <span className='bg-black h-0.5'></span>
            <div className='flex justify-around container p-5 bg-white font-space-grotesk'>
              {children}
            </div>
        </div>
    </>
  )
}

export default Card 
