import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import UseCaseItem from "@site/src/components/HomepageFeatures/UseCases/UseCaseItem";

const UseCasesList = [
  {
    title: "Collect & process data from thousands of IoT devices",
    imgSrc:
      "https://ravendb.net/wp-content/uploads/2025/04/migrate-to-ravendb-article-cover.jpg",
    description: (
      <>
        Discover how to gather and manage data from thousands of IoT devices,
        connect to servers
      </>
    ),
    url: "https://ravendb.net",
  },
  {
    title: "Learn how to process and analyze receipts from shops",
    imgSrc:
      "https://ravendb.net/wp-content/uploads/2025/04/high-memory-usage-article-cover.jpg",
    description: (
      <>
        Discover the steps to process receipts from shops, including how to
        create a client
      </>
    ),
    url: "https://ravendb.net",
  },
];

export default function UseCases(): ReactNode {
  return (
    <section className="mb-8">
      <Heading as="h3">Use cases</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {UseCasesList.map((props, idx) => (
          <UseCaseItem key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
