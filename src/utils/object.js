export const checkValue = (obj1, obj2) => {
    if (obj1.item === obj2.item && obj1.position !== obj2.position) return true;
    return false;
};
