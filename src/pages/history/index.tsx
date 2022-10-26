import classes from './history.module.scss';
import HistoryItem from 'components/translation-item';
import { getItemByKeyFromLocalStorage } from 'utils/history';

export default function HistoryPage() {
  const data = getItemByKeyFromLocalStorage('history');

  return (
    <div className={classes.history__wrapper}>
      <div className={classes.history__content}>
        {data?.map((item: any, index: number) => (
          <HistoryItem
            key={index}
            sourceLanguage={item.sourceLanguage}
            targetLanguage={item.targetLanguage}
            sourceText={item.sourceText}
            targetText={item.targetText}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
