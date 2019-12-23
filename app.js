$(() => {

      const months = ['Ianuarius', 'Februarius', 'Martius', 'Aprilis', 'Maius', 'Iunius', 'Iulius', 'Augustus', 'September', 'October', 'November', 'December']
      const numeralOnes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
      const numeralTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']

      // RETURN DIGITS FOR DATE AND LAST TWO OF YEAR AS ROMAN
      const romanizeDigits = (number) => {
            const digits = number.toString().split('');
            let splitDigits;
            let romanizedDate;

            if (digits.length === 4) {
                  splitDigits = digits.splice(2, 2)
                  romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1] + numeralOnes[parseInt(splitDigits[1]) - 1]
            } else if (digits.length === 2) {
                  splitDigits = digits
                  romanizedDate = numeralTens[parseInt(splitDigits[0]) - 1] + numeralOnes[parseInt(splitDigits[1]) - 1]
            } else if (digits.length === 1) {
                  romanizedDate = numeralOnes[number - 1]
            }

            return romanizedDate
      }

      // RETURN COMPLETE DATE
      const getDate = () => {
            const thisDate = new Date()
            const month = thisDate.getMonth()
            const date = thisDate.getDate()
            const year = thisDate.getFullYear()

            return months[month] + ' ' + romanizeDigits(date) + ', MM' + romanizeDigits(year)
      }

      const $romanDate = $('<h1>').text(getDate()).appendTo('main')

})

// i like music. check out 'Up in Flames' by Years & Years