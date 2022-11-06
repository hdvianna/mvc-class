export default function (dateString) {
    
    const date = new Date(dateString)
    
    return {
        value : date,
        isValid : !isNaN(date),
        isEmpty : !dateString || (dateString && !(dateString + "").trim())
    }

    
}