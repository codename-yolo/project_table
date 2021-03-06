import { fixedNumber, formatDate } from "./formatted";
function loadDataTable({ data }) {
  const tableElement = document.querySelector("table tbody");
  var datasetHtml = data.map(
    ({
      name,
      shares,
      percentage,
      last_update,
      price_range,
      share_volume,
      transaction_date,
    }) => {
      return `<tr>
       <td class="hasPopup">
       ${name}
       <div class="popup">
          <table>
            <thead>
               <tr>
                  <th>Ticker</th>
                  <th>Quantity</th>
                  <th>Percentage</th>
                  <th>Update date</th>
                  <th>Value</th>
                </tr>
             </thead>
             <tbody>
             </tbody>
           </table>
                    </div>
       </td>
       <td>${fixedNumber(shares)}</td>
       <td>${fixedNumber(percentage)}%</td>
       <td>${formatDate(last_update)}</td>
       <td ${share_volume < 40 ? 'style="color: red"' : ""}>
       ${share_volume < 40 ? " - " + share_volume : "+ " + share_volume}
       </td>
       <td>${fixedNumber(price_range.start)} - ${fixedNumber(
        price_range.end
      )}</td>
       <td>${formatDate(transaction_date)}</td>
     </tr>`;
    }
  );

  tableElement.innerHTML = datasetHtml.join("");

  return new Promise((resolve) => {
    const nameEle = document.querySelectorAll(".hasPopup");
    resolve(nameEle);
  });
}

export default loadDataTable;
