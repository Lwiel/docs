import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import UseCaseItem from "@site/src/components/Homepage/UseCases/UseCaseItem";

const UseCasesList = [
  {
    title: "Short introduction to data modeling in non-relational database",
    imgSrc:
      "https://ravendb.net/wp-content/uploads/2024/11/data-modeling-article.jpg",
    description: (
      <>
        Discover why data modeling in a document database is particularly
        important, and what should be taken into consideration when designing
        the data model
      </>
    ),
    url: "https://ravendb.net/articles/short-introduction-to-data-modeling-in-non-relational-database",
  },
  {
    title: "Processing invoices using Data Subscriptions in RavenDB",
    imgSrc:
      "https://ravendb.net/wp-content/uploads/2024/12/processing-invoices-article-cover.jpg",
    description: (
      <>
        Learn how to process invoices in asynchronous manner using the data
        subscriptions feature
      </>
    ),
    url: "https://ravendb.net/articles/processing-invoices-using-data-subscriptions-in-ravendb",
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
