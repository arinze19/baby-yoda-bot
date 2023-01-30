const axios = require('axios');
const languages = [
  { name: 'afrikaans', code: 'af', flag: '🇿🇦' },
  { name: 'portuguese', code: 'pt', flag: '🇧🇷' },
  { name: 'persian', code: 'fa', flag: '🇮🇷' },
  { name: 'japanese', code: 'ja', flag: '🇯🇵' },
  { name: 'hebrew', code: 'he', flag: '🇮🇱' },
  { name: 'greek', code: 'el', flag: '🇬🇷' },
  { name: 'french', code: 'fr', flag: '🇫🇷' },
  { name: 'italian', code: 'it', flag: '🇮🇹' },
  { name: 'english', code: 'en', flag: '🇬🇧' },
  { name: 'german', code: 'de', flag: '🇩🇪' },
  { name: 'spanish', code: 'es', flag: '🇪🇸' },
  { name: 'swedish', code: 'sv', flag: '🇸🇪' },
  { name: 'yiddish', code: 'yi', flag: '🇮🇱' },
  { name: 'arabic', code: 'ar', flag: '🇸🇦' },
  { name: 'chinese', code: 'zh', flag: '🇨🇳' },
  { name: 'croatian', code: 'cr', flag: '🇭🇷' },
  { name: 'zulu', code: 'zu', flag: '🇿🇦' },
  { name: 'dutch', code: 'nl', flag: '🇳🇱' }
];

const translate = async (language, message) => {
  language = languages.find((item) => item.name === language);

  if (!language) {
    return `Yet to learn that language, I am. please open an issue (https://github.com/arinze19/baby-yoda-bot/issues) for adding this language and I will get to studying`;
  }

  try {
    let { data } = await axios.get(
      `https://api.mymemory.translated.net/get?q=${message}&langpair=en|${language.code}`
    );

    return `${data['responseData'].translatedText} ${language.flag}`;
  } catch (error) {
    return 'Sorry, Cannot translate this data right now, please try again later';
  }
};

module.exports = { translate };
