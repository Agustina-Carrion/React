import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <header>
        <Link href="/home"> Home </Link>
        <br />
        <Link href="/about"> About </Link>
        <br />
        <Link href="/contact_us"> Contact Us </Link>
      </header>
      <main>
        <Route path="/home">FAFAFAF </Route>
        <Route path="/about"> JAJAJAJA</Route>
        <Route path="/contact_us"> LALALALA</Route>
      </main>
    </div>
  );
}

export default App;
