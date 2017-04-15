import apisauce from 'apisauce'

// const base = (Platform.OS === 'ios') ? Config.IOS_BASE_URL : Config.ANDROID_BASE_URL

const create = (baseURL = 'http://localhost:5000') => {
  // let headers = localStorage.token ? {'Authorization': `Token ${localStorage.token}`} : {}
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    // headers,
    // 10 second timeout...
    timeout: 10000000000
  })

  // Original Paths
  const search = (query) => {
    return api.get(`search?track=${query}`)
  }



  

  // Return back a collection of functions that we would consider our
  // interface.
  // Notice we're not returning back the `api` because it is scoped privately.
  //
  return {
    search
  }
}

export default { create }
