export default function ResumeChecker() {
  return null;
}

export async function getInitialProps({ res }) {
  res.writeHead(301, {
    Location: 'https://resume-checker.vercel.app/'
  });
  res.end();

  return { props: {} };
}