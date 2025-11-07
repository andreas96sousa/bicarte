export default function Link({link, texto, style}){
    return (
        <>
            <a className={style} href={link}>{texto}</a>
        </>
    )
} 