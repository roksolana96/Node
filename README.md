# Node


    # listContacts - https://ibb.co/F0ZyCPw ;

    # getContactById - https://ibb.co/qYcpyGC ;

    # addContact - https://ibb.co/WV7H90B ;

    # removeContact - https://ibb.co/gds8P92 ;


Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH