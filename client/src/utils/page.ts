export const getPageCount = (totalCount: any) => {
    return Math.ceil(Number(totalCount) / 12)
};

export const getPagesArray = (totalCount: any) => {
    let result = [];
    for (let i = 0; i < totalCount; i++) {
        result.push(i + 1)
    }
    return result
}