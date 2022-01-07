// Выбираем кнопку
const btn = document.querySelector(".theme-button");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});
