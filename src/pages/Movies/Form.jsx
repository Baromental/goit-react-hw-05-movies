import React from 'react';
import { useForm } from 'react-hook-form';

import s from './Form.module.css';

const Form = ({ setSearchParams }) => {
  const { register, handleSubmit, reset, watch } = useForm();

  const searchValue = watch('searchValue');

  const submit = () => {
    setSearchParams(searchValue ? { query: searchValue } : {});
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={s.form}>
      <input {...register('searchValue')} type="search" className={s.input} />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default Form;
