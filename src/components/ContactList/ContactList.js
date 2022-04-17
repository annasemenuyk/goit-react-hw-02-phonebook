import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';
import { nanoid } from 'nanoid';

const ContactList = ({ onFilteredContacts, onDeleteContact }) => {
  return (
    <ul className={styles.List}>
      {onFilteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.Item}>
          <p className={styles.Contact}>{name}:</p>
          <p className={styles.Contact}>{number}</p>

          <button
            type="button"
            className={styles.Button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
