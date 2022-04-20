import moment from 'moment'

const fixedNumber = (numberInput) => {
     const result = numberInput.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
     return result
}

const formatDate = (dateInput) => {
     const result = moment(dateInput).format('MM-DD-YYYY')
     return result
}
export { fixedNumber, formatDate }
