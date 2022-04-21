import moment from "moment";

const fixedNumber = (numberInput) => {
  return numberInput.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const formatDate = (dateInput) => {
  return moment(dateInput).format("MM/DD/YYYY");
};
export { fixedNumber, formatDate };
