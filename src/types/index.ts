export interface IRoutes {
    page: React.ReactNode
    url: string
    isNav?: boolean
    text?: string
    img?: string
}

interface Country {
    country: string
}

interface Genre {
    genre: string
}

export interface Films {
    countries: Country[]
    genres: Genre[]
    imdbId: string | null
    kinopoiskId: number
    nameEn: string | null
    nameOriginal: string
    nameRu: string | null
    posterUrl: string
    posterUrlPreview: string
    ratingImdb: number | null
    ratingKinopoisk: number
    description: string
    shortDescription: string
    type: 'FILM' | 'VIDEO' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'UNKNOWN'
    year: number
}

export interface Theme {
    theme:
        | 'VAMPIRE_THEME'
        | 'COMICS_THEME'
        | 'CLOSES_RELEASE'
        | 'FAMILY'
        | 'LOVE_THEME'
        | 'ZOMBIE_THEME'
        | 'CATASTROPHE_THEME'
        | 'KIDS_ANIMATION_THEME'
    name: string
}
