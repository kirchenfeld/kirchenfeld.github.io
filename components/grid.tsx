import { FunctionComponent } from 'react'

type GridProbs = {}

const Grid: FunctionComponent<GridProbs> = ({children}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-x-10 md:gap-x-20 gap-y-4'>
            {children}
        </div>
    )
}

export default Grid;