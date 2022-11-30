import TopBar from "./components/TopBar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PokemonCard from "./components/PokemonCard";
import { Route, Switch } from "wouter";
import styles from "./App.module.css";

function App() {
  const menu = [
    { text: "Home", target: "home" },
    { text: "Inbox", target: "inbox" },
    { text: "Pokedex", target: "pokedex" },
  ];
  return (
    <main className={styles.main}>
      <TopBar title="My first React app" msgCounter={3} />
      <div className={styles.container}>
        <Sidebar menu={menu} />
        <Content>
          <Switch>
            <Route path="/pokemon/:id">
              {(params) => <PokemonCard myPokemonID={params.id} />}
            </Route>
            <Route path="/pokedex">
              <div className={styles.grid}>
                {Array.from(Array(10)).map((_, i) => (
                  <PokemonCard key={i + 1} myPokemonID={i + 1} />
                ))}
              </div>
            </Route>
            <Route path="/inbox">Inbox</Route>
            <Route>
              <>
                Hello Visitor,
                <br />
                <br />
                nice to see you here!
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque at mauris accumsan, posuere arcu id, ultricies
                  turpis. Nullam aliquet turpis vitae massa commodo, et suscipit
                  est consectetur. Phasellus non ex fringilla, fringilla ex
                  quis, hendrerit nibh. Nunc vitae nisl et tellus scelerisque
                  gravida sit amet eget arcu. Nulla vel metus quis mauris
                  feugiat consectetur. Curabitur a nisi sed tortor faucibus
                  elementum. Curabitur eget metus dui.
                </p>
                <br />
                <p>
                  Vestibulum volutpat ornare mauris suscipit porttitor. Morbi ac
                  nulla ex. Nam et felis convallis, cursus justo quis, pulvinar
                  lacus. Donec rhoncus, leo ac tristique accumsan, lacus felis
                  tincidunt felis, ut condimentum neque tellus eu dui. Donec
                  sollicitudin quam a ipsum faucibus gravida ut ut nibh. Etiam
                  ultricies nunc lorem, a vestibulum ipsum volutpat sit amet.
                  Sed diam purus, imperdiet sit amet lorem sed, elementum
                  imperdiet enim. Vivamus enim sapien, maximus consectetur elit
                  consectetur, lacinia suscipit erat. Pellentesque habitant
                  morbi tristique senectus et netus et malesuada fames ac turpis
                  egestas. Suspendisse et orci leo. Sed id vulputate ligula.
                  Aenean eu orci sit amet nibh finibus feugiat. Morbi ultricies
                  purus leo.
                </p>
              </>
            </Route>
          </Switch>
        </Content>
      </div>
      <Footer copyright="by React Class (2022)" />
    </main>
  );
}

export default App;
