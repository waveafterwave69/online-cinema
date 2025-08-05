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
    filmId: string
    slogan: string
    countries: Country[]
    genres: Genre[]
    imdbId: string | null
    kinopoiskId: number
    nameEn: string | null
    filmLength: number
    ratingFilmCritics: number
    coverUrl: string
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

export interface News {
    description: string
    imageUrl: string
    kinopoiskId: number
    publishedAt: string
    title: string
    url: string
}

export interface ScreenShots {
    imageUrl: string
}

export interface FilmWatch {
    logoUrl: string
    platform: string
    url: string
}

export interface FilmFactss {
    spoiler: boolean
    text: string
    type: string
}

export interface Actor {
    description: null | string
    nameEn: string
    nameRu: string
    posterUrl: string
    professionKey: 'DIRECTOR' | 'ACTOR'
    professionText: string
    staffId: number
}

export interface Review {
    author: string
    date: string
    description: string
    kinopoiskId: number
    negativeRating: number
    positiveRating: number
    title: string
    type: 'NEGATIVE' | 'POSITIVE'
}
