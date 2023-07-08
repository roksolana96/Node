// console.log("Hello world")
// npm run dev

const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
const  invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      // ...
      const list = await contacts.listContacts();
      return console.table(list);      
      // break;

    case 'get':
      // ... id
      const get = await contacts.getContactById(id);
      return console.table(get);

      // break;

    case 'add':
      // ... name email phone
      const add = await contacts.addContact(name, email, phone);
      return console.table(add);      
      
      // break;

    case 'remove':
      // ... id
      const remove = await contacts.removeContact(id);
      return console.table(remove);
      // break;


    // case 'updateById':
 
    //     const update = await contacts.updateById(id, {name, email, phone});
    //     return console.table(update);
    //     // break;
    

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}


invokeAction(argv);

