export async function getStaticPaths() {
  return { paths: [
    { params: { id: '1' } }
  ], fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: params,
  };
}

export default function BlogPost({ id }) {
  return <div>Blog content {id}.</div>
}