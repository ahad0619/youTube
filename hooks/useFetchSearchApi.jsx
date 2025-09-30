import {search_api} from '../src/utils/constants.js'

const useFetchSearchApi =async (inputText) => {
   
      const rawData =await fetch(search_api+inputText)
      const data = await rawData.json()
      console.log(data)
      return data

   }

export default useFetchSearchApi
