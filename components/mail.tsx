import { FunctionComponent } from 'react'
import Image from 'next/image'

type MailProps = {
  mailto: string;
}

const Mail: FunctionComponent<MailProps> = ({children, mailto}) => {
  return (
    <div className="flex relative">
      <div className="w-10 h-10 bg-white transform transition-all absolute border-black border-2">

      </div>
      <div className="w-10 h-10 bg-white transform transition-all absolute border-black border-2 -top-1 -left-1">

      </div>
      <div className="flex w-10 h-10 bg-white transform transition-all absolute border-black border-2 -top-2 -left-2">
        <a href={mailto}>
        <Image 
          className='place-self-center'
          src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e895dee7e912fde.png"
          height="80px"
          width="80px"
        />
        </a>
      </div>
    </div>
  )
}

export default Mail;  