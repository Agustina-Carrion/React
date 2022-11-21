function MenuItem({ target, text, subMenuItems }) {
  return (
    <>
      <a className="navbar-item is-active" href={target}>
        {text}
      </a>
    </>
  );
}
export default MenuItem;
