const name = "Aditya K.";
const description = "I’m an undergrad at IIT-D and I'm interested in full-stack web development.";
const url = " ";

export default {
  title: name,
  description,
  openGraph: {
    type: "website",
    url,
    title: name,
    site_name: name,
    description,
    images: [{ url: `${url}/imgs/og-image.png` }]
  },
};