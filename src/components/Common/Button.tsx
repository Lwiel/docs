import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

interface ButtonProps {
  children: string;
  url?: string;
  className?: string;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
}

export default function Button({
  children,
  url,
  className = "",
  bgColor = "bg-primary",
  hoverColor = "hover:bg-primary-darker",
  textColor,
}: ButtonProps) {
  const baseClasses = clsx(
    "mt-auto inline-block rounded-lg px-4 py-2 text-center text-sm font-semibold transition-colors duration-300",
    bgColor,
    hoverColor,
    textColor,
    "!no-underline hover:!no-underline",
    className,
  );

  if (url) {
    return (
      <Link to={url} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return <button className={baseClasses}>{children}</button>;
}
