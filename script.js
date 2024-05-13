const calculateTimeSince = dateString => {
    const startDate = new Date(dateString);
    const today = new Date();
    const differenceInDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const differenceInYears = (differenceInDays / 365.25).toFixed(1);
    return differenceInYears;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('years').textContent = calculateTimeSince("2023-09-18");
});