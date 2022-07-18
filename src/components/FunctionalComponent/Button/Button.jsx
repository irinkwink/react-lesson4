import React from 'react';
import {useEffect} from 'react';
import style from './Button.module.css';

export const Button = props => {
  useEffect(() => {
    console.log('[]useEffect - button');
    return () => {
      console.log('CWU - button');
    };
  }, []);
  return <button className={style.btn}>Угадать</button>;
};
