export const getPageCount = (totalCount: number) => {
    return Math.ceil(Number(totalCount) / 12)
};

export const getPagesArray = (totalCount: number) => {
    let result = [];
    for (let i = 0; i < totalCount; i++) {
        result.push(i + 1)
    }
    return result
}