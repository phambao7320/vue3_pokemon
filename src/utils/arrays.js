export const sortRandomArrays = (arr) => arr.sort(() => 0.5 - Math.random());
export const createRandomArrays = (length) => {
    const arr = Array(length / 2)
        .fill()
        .map(() => 1 + Math.round(Math.random() * 63));
    const brr = [...arr];
    return sortRandomArrays([...arr, ...brr]);
};
