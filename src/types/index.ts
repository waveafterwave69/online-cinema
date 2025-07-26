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
