import { useEffect, useState } from 'react';

import { detectLanguage } from 'service';

type Props = {
  sourceText: string;
  sourceLanguage: string;
};

export default function useDetectLanguage({
  sourceText,
  sourceLanguage,
}: Props) {
  const [detectedLanguage, setDetectedLanguage] = useState('');

  useEffect(() => {
    if (!sourceText || sourceLanguage === 'auto') return;

    detectLanguage(sourceText).then((data) => {
      const element = data;
      const altElement = data?.alternatives?.[0];

      const language =
        element.score < 0.5 && altElement?.score
          ? altElement?.language
          : element?.language;

      setDetectedLanguage(language);
    });
  }, [sourceText, sourceLanguage]);

  return detectedLanguage;
}
