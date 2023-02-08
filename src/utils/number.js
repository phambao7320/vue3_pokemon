export const getNumberSize = (value) => {
    switch (value) {
        case 16:
            return 510;
        case 36:
            return 770;
        case 64:
            return 1030;
        default:
            return 1290;
    }
};
