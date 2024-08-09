const startDate = performance.now(); // start time for execution time

// Automatically detect user's locale
const userLocale = navigator.language || 'fr-FR';

// Function to parse a date in fr-FR format (DD/MM/YYYY) and return a Date object
function parseFrenchDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    
    // Check if the day, month, and year are valid
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        console.warn(`Invalid date components in string: ${dateStr}`);
        return null; // Return null if the date components are invalid
    }

    const date = new Date(year, month - 1, day); // month is zero-indexed in JavaScript

    // Check if the created date is valid
    if (isNaN(date.getTime())) {
        console.warn(`Invalid Date object created from string: ${dateStr}`);
        return null; // Return null if the Date object is invalid
    }

    return date;
}

// Get all elements with the class "update-date"
let dateElements = document.getElementsByClassName("date");

// Convert HTMLCollection to Array and loop through each element
Array.from(dateElements).forEach(element => {
    let rawDateStr = element.textContent.trim(); // Get the raw date string
    let parsedDate = parseFrenchDate(rawDateStr); // Parse it to a Date object

    // Check if the parsedDate is valid
    if (!parsedDate) {
        console.warn(`Skipping invalid date: ${rawDateStr}`);
        return; // Skip this element if the date is invalid
    }

    // Format the date according to the user's locale
    let formattedDate = new Intl.DateTimeFormat(userLocale).format(parsedDate);

    // Update the element's content with the formatted date
    element.textContent = formattedDate;
});


const endDate = performance.now(); // end timer for execution time
console.info(`date-formatter.js execution time: ${endDate - startDate} ms`);
