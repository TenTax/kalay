function browserCanUseCssVariables() {
  return window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', 0);
}

if (!browserCanUseCssVariables()) {
    document.body.innerHTML = '<div class="not-support">Увы, Ваш браузер устарел. Для просмотра содержимого этого сайта, используйте другой браузер.</div>';
}