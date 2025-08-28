/* Keeping script connected to the resume page for now */

console.log("Yare yare daze...")

const dateDisplayElement = document.getElementById("date-display")

populateDate(dateDisplayElement)

/* Mapping Functions */
function populateDate(dateDisplayElement) {
    const date = new Date()

    let monthNum = date.getMonth()

    let yearNum = date.getFullYear()

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let monthName = months[monthNum]

    let fullDate = `${monthName} ${yearNum}`

    dateDisplayElement.textContent = `As of ${fullDate}`
}