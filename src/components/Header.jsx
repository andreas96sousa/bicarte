export default function Header({ children, style  }) {
  return (
    <>
      <header className={style}>{children}</header>
    </>
  );
}
