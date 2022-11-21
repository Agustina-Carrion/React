import MenuItem from "./MenuItem";

function MenuItems() {
  return (
    <div className="column center">
      <div id="navbar" className="navbar-menu">
        <MenuItem target="info-page.html" text="Home" />
        <MenuItem target="about.html" text="About" />

        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link"> Destinations </div>
          <div className="navbar-dropdown">
            <a className="navbar-item" href="destinations.html">
              Visit Locations!
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item" href="new-entries.html">
              New Entries
            </a>
          </div>
        </div>
        <a className="navbar-item" href="map.html">
          Map
        </a>
        <a className="navbar-item" href="editpage.html">
          Edit Page
        </a>
      </div>
    </div>
  );
}

export default MenuItems;
