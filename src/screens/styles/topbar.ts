const baseTopBar = (name = "") => ({
    animate: true,
    backButtonHidden: true,
    background: {
        color: "#eee"
    },
    title: {
        text: name
    },
    visible: true
});

const backTopBar = (name = "") => ({
    animate: true,
    backButtonHidden: false,
    background: {
        color: "#fff"
    },
    title: {
        text: name
    },
    visible: true
});

const emptyTopBar = () => ({
    animate: false,
    drawBehind: true,
    visible: false
});

export default { backTopBar, baseTopBar, emptyTopBar };
