import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { addUser } from '../../redux/actions/user/add';
import { reset } from 'redux-form';

export const User = (props: any) => {
  const [isloading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    console.log('values', values)
    // props.dispatch(addUser(values));
    // props.dispatch(reset('user'));
  }
  return (
    <Form onSubmit={handleSubmit} isloading={isloading} {...props} />
  );
}

export default connect(null)(User);