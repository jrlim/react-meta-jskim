import { i18n as Ii18n } from 'i18next';
import { useTranslation, TFunction } from 'react-i18next';
// import useGlobalState from './useGlobalState';
import { useState } from 'react';

const useWemixTranslation = (): {
  $t: TFunction<'translation', undefined>;
  i18n: Ii18n;
} => {
  // const [isDebug] = useGlobalState('isDebug');
  const [isDebug, setIsDebug] = useState(false);
  const { t, i18n } = useTranslation();

  const debugTranslation = (key: string): TFunction<'translation', undefined> => {
    console.debug(`key : [ ${key} ] to translate ---> `, t(key));
    return t(key);
  };

  return {
    $t: isDebug ? debugTranslation : t,
    i18n
  };
};

export default useWemixTranslation;