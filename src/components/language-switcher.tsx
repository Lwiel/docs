import React from "react";
import { useLanguage } from "./language-context";
import clsx from "clsx";

const languages = [
  { label: "C#", value: "csharp" },
  { label: "Java", value: "java" },
  { label: "Python", value: "python" },
  { label: "PHP", value: "php" },
  { label: "Node.JS", value: "nodejs" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {languages.map((lang) => (
        <button
          key={lang.value}
          type="button"
          onClick={() => setLanguage(lang.value)}
          className={clsx(
            "px-3 py-1.5 rounded-md border text-sm transition-colors cursor-pointer",
            "border-gray-300 text-gray-500",
            "hover:bg-black/5 hover:border-gray-500 hover:text-gray-600",
            "dark:text-gray-300 dark:border-gray-600 dark:hover:text-gray-200 dark:hover:border-gray-400 dark:hover:bg-white/5",
            language === lang.value && [
              "bg-primary/10 border-primary text-primary",
              "hover:border-primary hover:text-primary hover:!bg-primary/10",
              "dark:border-primary dark:text-primary dark:hover:border-primary dark:hover:text-primary dark:hover:!bg-primary/10",
            ],
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
