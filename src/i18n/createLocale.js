/* eslint-disable */
const fs = require('fs');
const axios = require('axios');

const locales = ['ko', 'en'];

/**
 * @description 구글 스프레드시트 내용으로 json 파일 생성
 * @author David
 * @argument locale
 * @example npm run locale 국가명 -> 해당국가.json 생성
 * @example npm run locale -> 모든 국가 json 파일 생성
 */
(async function () {
  if (process.argv[3]) {
    createLocae(process.argv[3]);
  } else {
    for (const locale of locales) {
      await createLocae(locale);
    }
  }
})();

async function createLocae(locale) {
  const data = await getData(locale);
  console.log(`${locale} -> `, data);
  fs.writeFileSync(`./src/languages/${locale}.json`, JSON.stringify(data, null, 2).replace(/\\\\/g, '\\'));
}

async function getData(_locale) {
  const DOCUMENT_KEY = '1YYrK4wijCOk41yxhnsTLGNKbG_hGD3MMucTuEn8RXvQ';
  const url = `https://spreadsheets.google.com/feeds/list/${DOCUMENT_KEY}/1/public/full?alt=json`;
  const data = await axios.get(url);
  const { entry } = data.data.feed;

  const result = entry.reduce((acc, cur, i) => {
    if (i === 0) return acc;

    const dataKey = cur.title.$t;
    const valueKey = `gsx$${_locale}`;
    acc[dataKey] = cur[valueKey].$t;

    return acc;
  }, {});

  return result;
}

function sortJsonByAsc(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((acc, cur) => {
      acc[cur] = obj[cur];
      return acc;
    }, {});
}
