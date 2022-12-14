function MenuItem({text, target, count}) {
  return (
    <li>
      <a className="text-slate-700 hover:text-slate-900" href={target}>
        {text}
      </a>
      {count && (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </li>
  );
}
export default MenuItem;
