import Image1 from "./1.png";
import Image2 from "./2.png";

function ContentBody() {
  return (
    <>
      <div class="hero-body">
        <div class="content px-4 py-4">
          <h1>Tina's Travel Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <blockquote>
            "It's a dangerous business, Frodo, going out your door. You step
            onto the road, and if you don't keep your feet, there's no knowing
            where you might be swept off to" - Bilbo by J.R.R. Tolkien
          </blockquote>
          <h3>What you'll find...</h3>
          <p>
            A pellentesque sit amet porttitor eget. Quam quisque id diam vel
            quam
            <strong> elementum </strong> pulvinar etiam non. Nam libero justo
            laoreet sit. Mattis enim ut tellus elementum sagittis vitae et.
            Mollis nunc sed id semper risus. Aliquam sem fringilla ut morbi
            tincidunt augue interdum velit euismod. Mauris rhoncus aenean vel
            elit scelerisque. Convallis a cras semper auctor neque vitae tempus
            quam pellentesque. Pellentesque habitant morbi tristique senectus et
            netus et.
          </p>
          <ul>
            <li>
              A list of destinations. In fermentum leo eu lectus mollis, quis
              dictum mi aliquet.
            </li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>
              Aliquam nec felis in sapien venenatis viverra fermentum nec
              lectus.
            </li>
            <li>Ut non enim metus.</li>
          </ul>
          <h3>Last but not least...</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="columns">
            <div class="column center">
              <figure class="images">
                <img src={Image1} alt="" />
              </figure>
            </div>
            <div class="column center">
              <figure class="images">
                <img src={Image2} alt="" />
              </figure>
            </div>
          </div>
          <figcaption class="center" id="imagesSubtext">
            Figure 1: Some pictures from my trips!
          </figcaption>
        </div>
      </div>
    </>
  );
}

export default ContentBody;
