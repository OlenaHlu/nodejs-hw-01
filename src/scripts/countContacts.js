import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    //читання
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    //підрахунок
    const count = contacts.length;
    return count;
  } catch (error) {
    console.error('Error reading file:', error);
    return 0;
  }
};

//використання ф-ції
(async () => {
  try {
    const totalContacts = await countContacts();
    console.log('Total contacts:', totalContacts);
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
})();
