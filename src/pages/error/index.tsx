import { Link } from 'react-router-dom';
import classes from './error.module.scss';
import { ROUTES } from 'constants/routes';

function ErrorPage() {
  return (
    <div className={classes['error-page__wrapper']}>
      <div className={classes.content}>
        <h1>404</h1>
        <p>Страница не найдена</p>
      </div>
      <Link to={ROUTES.HOME}>
        <button className={classes.button}>Вернуться на главную</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
