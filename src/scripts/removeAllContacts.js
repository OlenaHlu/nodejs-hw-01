import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2), 'utf8');

    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();
