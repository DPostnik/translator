import { useApp } from 'store/context';
import EmptyList from 'components/empty-list';
import HistoryItem from 'components/translation-item';

import classes from 'components/list-page-layout/list-page-layout.module.scss';

type Props = {
  emptyListText: string;
  onClearList?: () => void;
  listSelector: (state: any) => any[];
  onRemoveItem?: (uid: string) => void;
  onUpdateIsFavourite: (uid: string, isFavourite: boolean) => void;
  onNavigate?: (uid: string, link: string) => void;
  headerText: string;
};

export default function ListPageLayout({
  emptyListText,
  onClearList,
  listSelector,
  onNavigate,
  onRemoveItem,
  onUpdateIsFavourite,
  headerText,
}: Props) {
  const listItems = useApp(listSelector);

  if (!listItems.length) {
    return <EmptyList text={emptyListText} />;
  }

  return (
    <div className={classes.history__wrapper}>
      <h1>{headerText}</h1>
      {onClearList && (
        <button onClick={onClearList} className={classes.history__control}>
          Очистить историю поиска
        </button>
      )}
      <div className={classes.history__content}>
        {listItems?.reverse().map((item: any) => (
          <HistoryItem
            onRouteClick={onNavigate}
            onAddToFavourites={onUpdateIsFavourite}
            onRemoveItem={onRemoveItem}
            key={item.uid}
            sourceLanguage={item.sourceLanguage}
            targetLanguage={item.targetLanguage}
            sourceText={item.sourceText}
            targetText={item.targetText}
            link={item.link}
            uid={item.uid}
            isFavourite={item.isFavourite}
          />
        ))}
      </div>
    </div>
  );
}
