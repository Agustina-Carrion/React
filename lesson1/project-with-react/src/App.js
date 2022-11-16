import "./App.css";
import NavBar from "./NavBar";
import ContentBody from "./ContentBody";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <section className="hero is-fullheight">
        <NavBar/>
        <ContentBody/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
