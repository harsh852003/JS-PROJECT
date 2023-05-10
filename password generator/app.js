const upperSet = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()_+/"

const getRandomData =  (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}  
