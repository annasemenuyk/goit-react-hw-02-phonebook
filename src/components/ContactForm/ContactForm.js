import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './ContactForm.css';

class PhonbookName extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
}
