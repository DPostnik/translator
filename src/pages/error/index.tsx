import { Link } from 'react-router-dom';
import classes from './error.module.scss';

function ErrorPage() {
  return (
    <div className={classes['error-page__wrapper']}>
      <div className={classes.content}>
        <h1>404</h1>
        <p>Страница не найдена</p>
      </div>
      <Link to="/">
        <button className={classes.button}>Вернуться на главную</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
