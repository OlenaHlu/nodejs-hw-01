import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    //читання
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    //створення
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    //запис
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(`Successfully added ${number} contacts.`);
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};

generateContacts(5);
