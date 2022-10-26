import useDetectLanguage from 'hooks/useDetectLanguage';

import classes from './warning.module.scss';
import { Languages } from 'enums/languages';

type WarningProps = {
  sourceLanguage: string;
  sourceText: string;
};

export default function Warning({ sourceLanguage, sourceText }: WarningProps) {
  const detectedLanguage = useDetectLanguage({ sourceText, sourceLanguage });

  const wrongLanguage =
    sourceLanguage !== Languages.AUTO &&
    sourceText &&
    detectedLanguage &&
    detectedLanguage !== sourceLanguage;

  return (
    <div
      className={`${classes.wrapper} ${wrongLanguage ? classes.active : ''}`}
    >
      {wrongLanguage && (
        <div className={classes.content}>Неправильный язык ввода</div>
      )}
    </div>
  );
}
