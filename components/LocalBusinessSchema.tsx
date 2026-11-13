export default function LocalBusinessSchema() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "LONE ENTERPRISES",

    url: "https://loneenterpriseskup.netlify.app",

    telephone: "+919186277731",

    email: "loneenterpriseskup1@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Awoora",
      addressLocality: "Kupwara",
      addressRegion: "Jammu and Kashmir",
      postalCode: "193224",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData).replace(/</g, "\\u003c"),
      }}
    />
  );
}