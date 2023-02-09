
export const setFormat = (amount) => {
    return new Intl.NumberFormat('de-DE').format(amount);
}