# Kapusta-team4-backend

Repository for backend for team project: team 4

## Endpoints

- `/api-docs` swagger

- `api/auth`

  - `/signup` - POST - энд-поинт регистрации +
  - `/login` - POST - энд-поинт аутентификации +
  - `/logout` - GET - энд-поинт логаута +
  - `/google` - GET - энд-поинт для авторизации через Google +/-????????

- `api/user` (нужен заголовок с токеном!!!!)
  - `/balance` - PATCH - энд-поинт для изменения у user-а поля isFirstLogin,
  должен быть в боди передано поле value с указанием суммы; +
  - `/balance` GET - энд-поинт обновления баланса пользователя +
  - `/avatar` - PATCH - энд-поинт для изменения у avatar user-а;
  - `/` PUT - энд-поинт для изменения имени у user-а +

- `/api/category` (нужен заголовок с токеном!!!!)
  - `/incomes` - GET = энд поинт для получения всех категорий для Доходов +
  - `/expenses` - GET = энд поинт для получения всех категорий для Расходов +

- `api/transactions`(нужен заголовок с токеном!!!!)
  - `/` POST - энд-поинт добавления транзакции, обязательно указать поле
    isExpense должно приходить от фронта body с полями: date: string,
    description: string, category: id as string, amount: string, isExpense:
    boolean +
  - `/` - GET - энд-поинт получения списка транзакций на текущую дату/или за
    текущий месяц, если не будет реализовывать календарь (на дату, которая
    указана в календаре) - нужно body c date +
  - `/:transactionId` - DELETE - энд-поинт удаления транзакции по id +

- `api/statistics`
  - `/expenses` - GET - энд-поинт получения общей сводки по расходам за
    последние 6 месяцев (на странице расходы/доходы) в виде РАСХОД: месяц -
    сумма, месяц - сумма + => return data: [{ "totalAnount": 1200, "month": 10
    }, { "totalAnount": 1200, "month": 11 }]
  - `/incomes` - GET - энд-поинт получения общей сводки по доходам за последние
    6 месяцев (на странице расходы/доходы) в виде ДОХОД: месяц - сумма, месяц -
    сумма + => аналогичный объект
  - `/expenses/:month` - GET энд-поинт получения подробной информации за месяц
    => для фронта нужна такая инфа: Доход - все за месяц, Расход - всего за
    месяц, список расходных категорий, по которым были транзакции (с нулевыми
    транзакциями не показывать),+ => возвращается объект: data: { "total": [ {
    "total": 610, "isExpense": true }, { "total": 1200, "isExpense": false } ],
    "categories": [ { "sum": 1200, "categoryId": "620393a6f8a2c005b9fee297" }
    .... ] }
  - `/incomes/:month` - GET энд-поинт получения подробной информации за месяц =>
    для фронта нужна такая инфа: Доход - все за месяц, Расход - всего за месяц,
    список доходных категорий , по которым были транзакции (с нулевыми
    транзакциями не показывать),+ => аналогично!
  - `/categories/:month/` - GET энд-поинт получения информации в разрезе
    discription по конкретной категории за конкретный месяц. Нужен body c id
    категории. Возвращает массив в data: [ { "total": 250, "description":
    "Продукты" }, { "total": 360, "description": "Мясо" } ]
