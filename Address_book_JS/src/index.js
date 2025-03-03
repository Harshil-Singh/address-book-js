const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Harshil", "S", "Bhopal", "India", "In", "10001", "1234567890", "Harshil@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
