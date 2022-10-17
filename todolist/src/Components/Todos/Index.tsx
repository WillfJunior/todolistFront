
type Props = {
    description:String;
    value: boolean;
    handleChange:() => void
}

export const Todo = ({description, value, handleChange}: Props) => {
    return (
        <div className='todoList'>
            <input type='checkbox' checked={value} onChange={handleChange}/>
            <p >{description}</p>
            <p>X</p>
        </div>
    )
}