const { format } = require('date-fns');

// Function to format a date
const formatDate = (date) => {
    // Example format: "DD/MM/YYYY HH:mm:ss"
    return format(date, "dd/MM/yyyy HH:mm:ss");
};

module.exports = { formatDate };



// Not sure if we need this, but I put it here for now - Crystal