
const Imagem = ({url, style, alt}) => {
  return (
    <>
      <img src={url} alt={alt} className={style} />
    </>
  );
}

export default Imagem;
