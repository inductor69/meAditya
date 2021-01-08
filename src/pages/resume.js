export default function Resume() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(301, {
    Location: '/docs/resume.pdf'
  });
  res.end();

  return { props: {} };
}