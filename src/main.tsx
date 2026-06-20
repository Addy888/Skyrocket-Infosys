
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Add JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkyRocket Infosys",
    "description": "AI innovation company specializing in artificial intelligence, intelligent automation, and next-generation technology solutions.",
    "url": "https://skyrocket-infosys.adityashastri76.workers.dev/",
    "logo": "https://skyrocket-infosys.adityashastri76.workers.dev/logo.png",
    "image": "https://skyrocket-infosys.adityashastri76.workers.dev/og-image.jpg",
    "email": "adityashastri76@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Aditya Kumar Shastri",
      "jobTitle": "Founder & AI Innovation Leader"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/skyrocket-infosys",
      "https://linkedin.com/company/skyrocket-infosys",
      "https://twitter.com/skyrocketinfo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "adityashastri76@gmail.com",
      "contactType": "customer service"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200"
    }
  };

  // Inject structured data into head
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);

  createRoot(document.getElementById("root")!).render(<App />);

  