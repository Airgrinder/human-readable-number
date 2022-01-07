let count = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']]

module.exports = function toReadable(number) {
    if (number <= 9) {
        return  count[0][number]
    } else if (number <= 19) {
        return count[1][parseInt(number.toString().slice(1))]
    } else if (number <= 99) {
        if (parseInt(number.toString().slice(1))) {
            return count[2][parseInt(number.toString().slice(0, 1))] + ' ' + count[0][[parseInt(number.toString().slice(1))]]
        }
        return count[2][parseInt(number.toString().slice(0, 1))]
    } else if (number <= 999) {
        if (!!!+number.toString().slice(2, 3) && !!!+number.toString().slice(1, 2)) {
            return count[0][parseInt(number.toString().slice(0, 1))] + ' hundred'
        } else if (number.toString().slice(1, 3) <= 9) {
            return count[0][parseInt(number.toString().slice(0, 1))] + ' hundred ' + count[0][parseInt(number.toString().slice(2, 3))]
        } else if (number.toString().slice(1, 3) <= 19) {
            return count[0][parseInt(number.toString().slice(0, 1))] + ' hundred ' + count[1][parseInt(number.toString().slice(2, 3))]
        } else if (+number.toString().slice(2, 3) === 0) {
            return count[0][parseInt(number.toString().slice(0, 1))] + ' hundred ' + count[2][parseInt(number.toString().slice(1, 2))]
        } else {
            return count[0][parseInt(number.toString().slice(0, 1))] + ' hundred ' + count[2][parseInt(number.toString().slice(1, 2))] + ' ' + count[0][parseInt(number.toString().slice(2, 3))]
        }
    }
}
