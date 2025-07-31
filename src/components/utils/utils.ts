export const validateTime = (time: string) => {
    return time.slice(0, 10).split('-').join('.')
}
