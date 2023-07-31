import yargs from "yargs";

import contactsService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.getListContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const removeContact = await contactsService.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("Unknown action type!");
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
