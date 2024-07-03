import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async (number) => {
  try {
    //читання
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    //створення
    const newContact = createFakeContact();

    //додавання
    contacts.push(newContact);

    //запис
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(`Successfully added one contact.`);
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};

addOneContact();
