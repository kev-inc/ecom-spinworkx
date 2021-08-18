import Link from "next/link";

export default function MainPage({ data }) {
  return (
    <div className="container">
      <div className="columns is-multiline">
        {data.map((item) => (
          <div className="column is-one-quarter">
            <Link href={`/product/${item.href}`}>
              <a>
                <figure class="image is-square">
                  <img src={item.img} alt="tb" />
                </figure>
                <div className="is-size-4 has-text-weight-medium">
                  {item.name}
                </div>
                <div className="is-size-6">{item.price}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const res = await fetch(`https://scrapi-go.vercel.app/api/spinworkx/main`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
