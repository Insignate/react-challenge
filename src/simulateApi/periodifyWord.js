import { periodicTableSymbols } from "../constants/periodicTable"

//"simulate" an api call to return the periodic table from the first and last name 
export const periodifyWord = function (firstName, lastName) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const firstWordMatch = matchPeriodicTableWord(firstName)
                const lastWordMatch = matchPeriodicTableWord(lastName)
                resolve({firstWordMatch, lastWordMatch})
            }, 500)
            
        } catch (error) {
            reject({error: "Error processing the word"})
        }
    })
}

//search and find the periodic table word
const matchPeriodicTableWord = word => {
    for (let i = 0; i < periodicTableSymbols.length; i++){
        if (word.includes(periodicTableSymbols[i])){
            return periodicTableSymbols[i]
        }
    }
    return ''
}

export default periodifyWord
