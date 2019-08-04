/**
 * 小さい言葉を無効にして文字数をカウントする関数
 */
export default (word: string) => {
  const countableWord = word.replace(/ァ|ィ|ゥ|ェ|ォ|ャ|ュ|ョ/gi, "");
  return countableWord.length;
};
