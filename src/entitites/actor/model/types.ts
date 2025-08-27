type ActorPofessional = 'DIRECTOR' | 'ACTOR'

export interface Actor {
    description: null | string
    nameEn: string
    nameRu: string
    posterUrl: string
    professionKey: ActorPofessional
    professionText: string
    staffId: number
}

export interface FilmFactss {
    spoiler: boolean
    text: string
    type: string
}
