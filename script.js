function onInputFocus(inputElement) {
    inputElement.classList.remove("default-border");
}

function onInputBlur(inputElement) {
    if (!inputElement.value.trim()) {
        inputElement.classList.add("default-border");
    }
}
function calculateDateDifference(event) {
    event.preventDefault();

    const dayInput = parseInt(document.getElementById("day-input").value);
    const monthInput = parseInt(document.getElementById("month-input").value);
    const yearInput = parseInt(document.getElementById("year-input").value);

    const today = new Date();
    const birthDate = new Date(yearInput, monthInput - 1, dayInput);

    if (
        isNaN(dayInput) ||
        isNaN(monthInput) ||
        isNaN(yearInput) ||
        dayInput < 1 ||
        dayInput > 31 ||
        monthInput < 1 ||
        monthInput > 12 ||
        yearInput < 0 ||
        yearInput.toString().length !== 4 ||
        birthDate > today ||
        dayInput !== birthDate.getDate() ||
        monthInput - 1 !== birthDate.getMonth()
    ) {
        alert("Please double check your date of birth");
        document.querySelector(".years_year").innerText = "--";
        document.querySelector(".months_month").innerText = "--";
        document.querySelector(".days_day").innerText = "--";
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    document.querySelector(".years_year").innerText = years;
    document.querySelector(".months_month").innerText = months;
    document.querySelector(".days_day").innerText = days;
}
