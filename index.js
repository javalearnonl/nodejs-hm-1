const yargs = require('yargs');
const contacts = require('./contacts');

yargs
  .command({
    command: 'list',
    describe: 'Get the list of contacts',
    handler: () => {
      contacts.listContacts();
    },
  })
  .command({
    command: 'get <id>',
    describe: 'Get a contact by ID',
    handler: (argv) => {
      contacts.getContactById(argv.id);
    },
  })
  .command({
    command: 'add',
    describe: 'Add a new contact',
    builder: {
      name: { describe: 'Contact name', demandOption: true, type: 'string' },
      email: { describe: 'Contact email', demandOption: true, type: 'string' },
      phone: { describe: 'Contact phone', demandOption: true, type: 'string' },
    },
    handler: (argv) => {
      contacts.addContact(argv.name, argv.email, argv.phone);
    },
  })
  .command({
    command: 'remove <id>',
    describe: 'Remove a contact by ID',
    handler: (argv) => {
      contacts.removeContact(argv.id);
    },
  })
  .demandCommand(1, 'Please provide a valid command.')
  .help()
  .argv;
