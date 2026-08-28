import type { FontName, Show } from "../types/show"

// Const that contains an object with fontname and the style attached. 
export const fontClassMap: Record<FontName, string> = {
    "patrick-hand": "font-patrick-hand",
    "euphoria-script": "font-euphoria-script",
    "pirata-one": "font-pirata-one",
}

// Shows
export const shows: Show[] = [
    {
        id: 1,
        slug: "dragons",
        title: "Dragons",
        youtubeUrl:"https://www.youtube.com/embed/5dWeNLi3cD8",
        featured: true,
        titleFont: "pirata-one",
    },
    {
        id: 2,
        slug: "les-swinguettes",
        title: "Les Swinguettes",
        youtubeUrl: "https://www.youtube.com/embed/NhlVL4HjTtA",
        featured: true,
        titleFont: "euphoria-script",
    },
];