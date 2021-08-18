export default function ProductPage({ data }) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <figure className="image is-square">
            <img className="p-4" src={data.img[0].src} alt="thumb" />
          </figure>
          <figure class="image is-48x48 is-flex">
            {data.img.map((im) => (
              <img src={im.thumbnail} alt="preview" />
            ))}
          </figure>
        </div>
        <div className="column">
          <h2 className="is-size-2 has-text-weight-medium block">
            {data.name}
          </h2>
          <h4 className="is-size-4 block">{data.price}</h4>
          <div className="block">
            <p className="mb-3" style={{ whiteSpace: "pre-line" }}>
              {data.desc}
            </p>
            <div>
              <span>Categories: </span>
              {data.tags.map((tag) => (
                <a href="#">{tag}; </a>
              ))}
            </div>
          </div>
          <div className="block">
            <button class="button is-black is-fullwidth my-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { itemId } = context.params;
  const res = await fetch(
    `https://scrapi-go.vercel.app/api/spinworkx/product?name=${itemId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
