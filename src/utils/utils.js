/* Funktionen, die mehrfach im Projekt genutzt werden */

export function toReformattedDate(date) {
    const dateObj = new Date(date);
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }
    return new Intl.DateTimeFormat('en-Gb', options).format(dateObj);
}

export function toCurrencyFormat(total) {
    return total.toLocaleString("en-GB", {minimumFractionDigits: 2});
}
