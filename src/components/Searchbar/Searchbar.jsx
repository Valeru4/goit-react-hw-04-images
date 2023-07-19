import React, { useState } from 'react';
import { Header, Form, Input, Button } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeInput = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter a request!');
      return;
    }
    props.onSubmit(searchQuery);
    setSearchQuery('');
    event.currentTarget.reset();
  };

  return (
    <Header>
      <Form onSubmit={handleSubmitForm}>
        <Input
          value={searchQuery}
          type="text"
          onChange={handleChangeInput}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />

        <Button type="submit">
          <span>Search</span>
        </Button>
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
