import React, { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

export interface CardWithIconProps {
  title: string;
  description: ReactNode;
  url?: string;
}

export default function CardWithIcon({
  title,
  description,
  url,
}: CardWithIconProps) {
  const content = (
    <div className="card flex items-start gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-muted/40 p-4 hover:border-black/20 dark:hover:border-white/20 transition-colors">
      <div>
        <Heading as="h4" className="!mb-1">
          {title}
        </Heading>
        <p className="!mb-0 text-sm">{description}</p>
      </div>
    </div>
  );

  return url ? (
    <Link to={url} className="!no-underline !text-inherit !hover:no-underline">
      {content}
    </Link>
  ) : (
    content
  );
}
