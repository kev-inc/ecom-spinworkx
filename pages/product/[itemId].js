export default function ProductPage() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <figure className="image is-square">
            <img
              className="p-4"
              src="https://www.spinworkx.com/main/wp-content/uploads/2020/04/Bi-Shutter-Galaxy.jpg"
              alt="thumb"
            />
          </figure>
          <figure class="image is-48x48 is-flex">
            <img src="https://www.spinworkx.com/main/wp-content/uploads/2020/04/Bi-Shutter-Galaxy.jpg" />
            <img src="https://www.spinworkx.com/main/wp-content/uploads/2020/04/Bi-Shutter-Silver.jpg" />
            <img src="https://www.spinworkx.com/main/wp-content/uploads/2020/04/Bi-Shutter-Gap.jpg" />
          </figure>
        </div>
        <div className="column">
          <h2 className="is-size-2 has-text-weight-medium my-2">
            Bi-Metal Shutter
          </h2>
          <h4 className="is-size-4 my-2">US$49.99</h4>
          <p className="my-4">
            Skill Level: Advance (Unresponsive)
            <br />
            Company / Brand: YoYoFactory
            <br />
            Diameter: 56.0mm
            <br />
            Width: 46.5mm
            <br />
            Weight: 65.0grams
            <br />
            Bearing Size: Size C (Large)
            <br />
            Response: Silicone Pads (Large Bearing)
            <br />
          </p>
          <div className="my-4">
            <span>Categories: </span>
            <a href="#">New Arrivals</a>
            <span>, </span>
            <a href="#">Yo Yo</a>
            <span>, </span>
            <a href="#">YoYoFactory</a>
          </div>
          <button class="button is-black is-fullwidth my-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
