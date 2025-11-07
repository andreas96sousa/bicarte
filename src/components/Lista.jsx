export default function List({ children, style }){
    return (
        <>
            <ul className={style}>{ children }</ul>
        </>
    )
} 