// Здесь можно добавить обработчики форм, события кликов и другое поведение

document.querySelector('.tour-form').addEventListener('submit', function(event){
    event.preventDefault(); // Предотвращаем отправку формы
    alert("Форма была отправлена!");
});