import {useState} from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';
import Button from './Button';

export const FunctionalComponent = ({min, max}) => {
  const [userNumber, setUserNumber] = useState('');
  const [result, setResult] = useState('Результат');
  const [count, setCount] = useState(0);
  const [randomNumber] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  const [showButton, setShowButton] = useState(true);

  // useEffect(() => {
  //   console.log('useEffect - CDU');
  // });

  // useEffect(() => {
  //   console.log('[] useEffect - CDM');
  //   return () => {
  //     console.log('CWU');
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('[userNumber] useEffect - CDM');
  // }, [userNumber]);

  const handleSubmit = e => {
    e.preventDefault();

    setCount(prevCount => prevCount + 1);

    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} больше загаданного числа`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} меньше загаданного числа`;
      }
      setShowButton(false);
      return `Угадали, загаданное число ${userNumber}`;
    });
  };

  const handleChange = e => {
    setUserNumber(e.target.value);
  };

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          Попыток: {count}
        </label>
        <input
          className={style.input}
          type='number'
          id='user_number'
          value ={userNumber}
          onChange ={handleChange}
        />
        {showButton && <Button />}
        {/* <button className={style.btn}>Угадать</button> */}
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
