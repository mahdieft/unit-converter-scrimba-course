const inputField = document.getElementById('input');
const errorMessage = document.querySelector('.error');
const convertButton = document.getElementById('convert');
const length = document.getElementById('length');
const volume = document.getElementById('volume');
const mass = document.getElementById('mass');

convertButton.addEventListener('click', () => {
    const value = inputField.value;
    if (!is_valid_number(value)) {
        errorMessage.style.display = 'block';
        return;
    }
    errorMessage.style.display = 'none';

    update_length(value, convert_length(value));
    update_volume(value, convert_volume(value));
    update_mass(value, convert_mass(value));
});

function is_valid_number(number) {
    return !isNaN(number);
}

function convert_length(value) {
    const METER_TO_FOOT = 3.28084;
    const FOOT_TO_METER = 0.3048;
    return [
        (value * METER_TO_FOOT).toFixed(3),
        (value * FOOT_TO_METER).toFixed(3),
    ];
}

function convert_volume(value) {
    const LITER_TO_GALLON = 0.264172;
    const GALLON_TO_LITER = 3.78541;
    return [
        (value * LITER_TO_GALLON).toFixed(3),
        (value * GALLON_TO_LITER).toFixed(3),
    ];
}

function convert_mass(value) {
    const KILOGRAM_TO_POUND = 2.20462;
    const POUND_TO_KILOGRAM = 0.453592;
    return [
        (value * KILOGRAM_TO_POUND).toFixed(3),
        (value * POUND_TO_KILOGRAM).toFixed(3),
    ];
}

function update_length(value, converted_values) {
    length.textContent = `${value} meters = ${converted_values[0]} feet | ${value} feet = ${converted_values[1]} meters`;
}

function update_volume(value, converted_values) {
    volume.textContent = `${value} liters = ${converted_values[0]} gallons | ${value} gallons = ${converted_values[1]} liters`;
}

function update_mass(value, converted_values) {
    mass.textContent = `${value} kilos = ${converted_values[0]} pounds | ${value} pounds = ${converted_values[1]} kilos`;
}
