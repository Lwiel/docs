import React, { ReactNode, useMemo } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import Heading from "@theme/Heading";
import GuideItem from "@site/src/components/Homepage/Guides/GuideItem";
import surviveTheAiTidalWaveWithRavenDBGenAiImg from "@site/static/img/ravendb/article-cover-genai.png";
import processingInvoicesUsingDataSubscriptionsInRavenDbImg from "@site/static/img/ravendb/processing-invoices-article-cover.jpg";

const guides = [
    {
        title: "First Guide",
        imgSrc: surviveTheAiTidalWaveWithRavenDBGenAiImg,
        description: (
            <>
                Guide 1
            </>
        ),
        url: "/guides/example-guide",
        tags: ["ai", "indexes"]
    },
    {
        title: "Second Guide",
        imgSrc: processingInvoicesUsingDataSubscriptionsInRavenDbImg,
        description: (
            <>
                Guide 2
            </>
        ),
        url: "/guides/other-guide",
        tags: ["ai", "querying"]
    },
    {
        title: "Third Guide",
        imgSrc: processingInvoicesUsingDataSubscriptionsInRavenDbImg,
        description: (
            <>
                Guide 3
            </>
        ),
        url: "/guides/other-guide",
        tags: ["querying"]
    },
    {
        title: "Fourth Guide",
        imgSrc: processingInvoicesUsingDataSubscriptionsInRavenDbImg,
        description: (
            <>
                Guide 4
            </>
        ),
        url: "/guides/other-guide",
        tags: ["indexes"]
    },
    {
        title: "Fifth Guide",
        imgSrc: processingInvoicesUsingDataSubscriptionsInRavenDbImg,
        description: (
            <>
                Guide 5
            </>
        ),
        url: "/guides/other-guide",
        tags: ["querying"]
    },
];

export default function Guides(): ReactNode {
    const location = useLocation();
    const history = useHistory();

    const allTags = useMemo(() => {
        return [...new Set(guides.flatMap((g) => g.tags || []))];
    }, []);

    const selectedTags = useMemo(() => {
        // eslint-disable-next-line no-undef
        const params = new URLSearchParams(location.search);
        const tags = params.get('tags');
        return tags ? tags.split(',') : [];
    }, [location.search]);

    const updateTags = (newTags: string[]) => {
        // eslint-disable-next-line no-undef
        const params = new URLSearchParams();
        if (newTags.length > 0) {
            params.set('tags', newTags.join(','));
        }
        history.push({ search: params.toString() });
    };

    const toggleTag = (tag: string) => {
        const nextTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag)
            : [...selectedTags, tag];
        updateTags(nextTags);
    };

    const filteredGuides = useMemo(() => {
        if (selectedTags.length === 0) {
            return guides;
        }
        return guides.filter((guide) =>
            selectedTags.every((tag) => guide.tags?.includes(tag))
        );
    }, [selectedTags]);

    return (
        <section className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
                {allTags.map((tag) => {
                    const isActive = selectedTags.includes(tag);
                    return (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 rounded-full border text-sm transition-all ${
                                isActive
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-gray-100 text-gray-700 border-transparent hover:border-gray-400'
                            }`}
                        >
                            {tag}
                        </button>
                    );
                })}
                {selectedTags.length > 0 && (
                    <button onClick={() => updateTags([])} className="text-sm underline ml-2">
                        Reset
                    </button>
                )}
            </div>
            <div className="flex justify-between items-baseline">
                <Heading as="h3">Guides</Heading>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredGuides.map((props, idx) => (
                    <GuideItem key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}
