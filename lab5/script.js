document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submit-button');

    form.addEventListener('submit', function(event) {
        // Отримати значення полів форми
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const birthdate = document.getElementById('birthdate').value;
        const address = document.getElementById('address').value;
        const telegram = document.getElementById('telegram').value;

        // Регулярні вирази для валідації
        const fullnamePattern = /^[A-Za-zА-Яа-я\s]{3,} [A-Za-zА-Яа-я\s]\.[A-Za-zА-Яа-я\s]\.$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.(com)$/;

        const birthdatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
        const addressPattern = /^(м\.|смт\.|с\.)\s[А-ЯҐЄІЇа-яґєії\s]+$/;
        const telegramPattern = /^@\w+$/;

        let isValid = true;

        // Перевірка відповідності регулярним виразам
        if (!fullnamePattern.test(fullname)) {
            isValid = false;
            alert('Неправильний формат ПІБ');
        }
        if (!emailPattern.test(email)) {
            isValid = false;
            alert('Неправильний формат Email');
        }
        if (!birthdatePattern.test(birthdate)) {
            isValid = false;
            alert('Неправильний формат дати народження');
        }
        if (!addressPattern.test(address)) {
            isValid = false;
            alert('Адреса не може бути порожньою');
        }
        if (!telegramPattern.test(telegram)) {
            isValid = false;
            alert('Неправильний формат Telegram');
        }

        // Якщо дані не валідні, запобігти відправці форми
        if (!isValid) {
            event.preventDefault();
        }
    });
});
