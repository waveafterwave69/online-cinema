import type { Actor } from '../types'

export const validateTime = (time: string | undefined) => {
    if (time) {
        return time.slice(0, 10).split('-').join('.')
    }
}

export const validatefilmLength = (filmLength: number | undefined) => {
    if (typeof filmLength === 'number') {
        let hour = 0
        let filmLengthCurr = filmLength
        while (filmLengthCurr > 60) {
            hour += 1
            filmLengthCurr -= 60
        }
        return `${hour} ч. ${filmLengthCurr} мин.`
    }
}

export const getActors = (
    arr: Actor[] | undefined,
    actorKey: 'DIRECTOR' | 'ACTOR'
) => {
    if (arr) {
        const newArr = arr.filter((actor: Actor) => {
            return actor.professionKey === actorKey
        })
        return newArr
    }
}
