import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

//використання ф-ції
(async () => {
  try {
    const allContacts = await getAllContacts();
    console.log(allContacts);
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
})();
