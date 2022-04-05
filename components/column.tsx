import { FunctionComponent } from 'react'

type ColumnProps = {}

const Column: FunctionComponent<ColumnProps> = ({children}) => {
    return (
        <div className='flex flex-col'>
            {children}
        </div>
    )
}

export default Column;