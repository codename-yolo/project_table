import moment from 'moment'

function loadDataTable({ data }) {
     const tableElement = document.querySelector('table tbody')
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
                           <tfoot>
                            <tr>
                                <td colspan="4">Total</td>
                                <td>376.8</td>
                              </tr>
                           </tfoot>
                            
                          </table>
                    </div> 
       </td>
       <td>${shares.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
       <td>${percentage}%</td>
       <td>${moment(last_update).format('MM-DD-YYYY')}</td>
       <td ${share_volume < 40 ? 'style="color: red"' : ''}>
       ${share_volume < 40 ? ' - ' + share_volume : '+ ' + share_volume}
       </td>
       <td>${price_range.start} - ${price_range.end}</td>
       <td>${moment(transaction_date).format('MM-DD-YYYY')}</td>
     </tr>`
          },
     )

     tableElement.innerHTML = datasetHtml.join('')

     return new Promise((resolve) => {
          const nameEle = document.querySelectorAll('.hasPopup')
          resolve(nameEle)
     })
}
export default loadDataTable
