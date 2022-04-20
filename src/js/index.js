import axios from 'axios'
import '../scss/style.scss'

import getDataApi from './callApi'
import getDetail from './getDetailName'
import loadDataTable from './loadDataApi'

const URL_API = 'https://625ce68595cd5855d6178b7b.mockapi.io/dataset'

getDataApi(URL_API, {}, 'get')
     .then(loadDataTable)
     .then(getDetail)
     .catch((thrown) => {
          if (axios.isCancel(thrown)) {
               console.log('Request canceled', thrown.message)
          } else {
               console.log('Cancel error')
          }
     })
