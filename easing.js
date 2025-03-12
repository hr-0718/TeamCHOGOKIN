
function easeInBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return c3 * x * x * x - c1 * x * x;
}
function easeInBack2(x) {
    const c1 = 2.2;
    const c3 = c1 + 1;

    return c3 * x * x * x - c1 * x * x;
}