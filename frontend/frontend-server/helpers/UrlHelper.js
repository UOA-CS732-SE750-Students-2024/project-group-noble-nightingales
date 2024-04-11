export const concatenateUrl = (jsonFile, method) => {
  return "http://" + jsonFile.host + ":" + jsonFile.port + method
}
