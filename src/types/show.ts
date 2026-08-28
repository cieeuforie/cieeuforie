// Type of fonts
export type FontName = "patrick-hand" | "euphoria-script" | "pirata-one"

// Type show
export type Show = {
    id: number
    slug: string
    title: string
    youtubeUrl: string
    featured: boolean
    titleFont: FontName
}
