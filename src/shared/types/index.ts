interface Country {
    country: string
}

interface Genre {
    genre: string
}

type FilmType =
    | 'FILM'
    | 'VIDEO'
    | 'TV_SHOW'
    | 'TV_SERIES'
    | 'MINI_SERIES'
    | 'UNKNOWN'

export interface Films {
    film?: any
    email?: string
    fav?: Films[]
    like?: Films[]
    dislike?: Films[]
    rating: number
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
    type: FilmType
    year: number
}

export interface IRoutes {
    page: React.ReactNode
    url: string
    isNav?: boolean
    text?: string
    img?: string
}

export interface News {
    description: string
    imageUrl: string
    kinopoiskId: number
    publishedAt: string
    title: string
    url: string
}

export interface FilmWatch {
    logoUrl: string
    platform: string
    url: string
}

type ReviewType = 'NEGATIVE' | 'POSITIVE'

export interface Review {
    author: string
    date: string
    description: string
    kinopoiskId: number
    negativeRating: number
    positiveRating: number
    title: string
    type: ReviewType
}

export interface ActorProfilee {
    age: number
    birthday: string
    birthplace: string
    death: null | number | string
    deathplace: null | string
    facts: any
    films: Films[]
    growth: number
    hasAwards: number
    nameEn: string
    nameRu: string
    personId: number
    posterUrl: string
    profession: string
    sex: string
    spouses: any
    webUrl: string
}

export interface UserProfile {
    email: string
    password: string
    fav?: Films[]
    like?: Films[]
    dislike?: Films[]
    id?: string
}
