# converter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Необходимо написать одностраничное приложение для расчета
обменного курса. Т.е. Виджет для обмена валют.
Для получения списка обменных курсов можно воспользоваться
сервисом https://exchangeratesapi.io
Отправив GET запрос на указанный ниже URL, пользователь получит
обменный курс для нескольких валют, для которых базовой обменной
валютой является Доллар США (USD)
Вы можете сами попробовать, выполнив в браузере следующий
запрос: https://api.exchangeratesapi.io/latest?base=USD
Валюты, которые необходимо поддерживать приложению:
• USD
• EUR
• PLN
• CZK
