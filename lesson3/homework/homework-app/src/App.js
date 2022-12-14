import "./App.css";
import Greeting from "./Greeting";
import Farewell from "./Farewell";
import MenuItem from "./MenuItem";

function App() {
  const messageCounter = 20;

  const menu = [
    { text: "Home", target: "#home" },
    { text: "Inbox", target: "#inbox", count: messageCounter },
    { text: "About Me", target: "#about" },
  ];

  return (
    <main className="flex flex-col w-full h-full">
      <header className="w-full bg-gray-100 border-b border-slate-400 h-16 flex items-center px-4 justify-between">
        <div className="text-xl font-bold">My Component Page</div>

        <span className="relative inline-block">
          <svg
            className="w-6 h-6 text-slate-600 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {messageCounter}
          </span>
        </span>
      </header>
      <div className="flex h-full">
        <aside className="w-1/4 h-full border-slate-400 border-r p-4">
          <ul className="flex flex-col gap-2 font-semibold">
            {menu.map((menuItem) => (
              <MenuItem
                text={menuItem.text}
                target={menuItem.target}
                count={menuItem.count}
              />
            ))}
          </ul>
        </aside>
        <article className="p-4">
          <Greeting name="Agustina" />
          <br />
          <br />
          you have <strong>{messageCounter}</strong> unread messages.
          <br />
          <br />
          Please go to your inbox to read them.
          <br />
          <Farewell sender="Email Service"></Farewell>
        </article>
      </div>
      <footer className="h-12 border-t border-slate-400 flex items-center px-4 text-sm text-slate-400">
        by Dieter Developer (2022)
      </footer>
    </main>
  );
}

export default App;
