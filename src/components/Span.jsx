
const Span = ({text, style}) => {
  return (
    <>
      <h1>
        {text}
        <span className={style}>.</span>
      </h1>
    </>
  );
}

export default Span;
