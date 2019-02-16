import _ from "lodash";

const getHitSlop = (iconSize: number) => {
    const divisionValue = 2;

    const extendSize = _.floor(iconSize / divisionValue);

    return {
        bottom: extendSize,
        left: extendSize,
        right: extendSize,
        top: extendSize
    };
};

export { getHitSlop };
