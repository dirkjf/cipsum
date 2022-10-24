import data from './data.json';

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function cipsumSentence(number = 1): string {
  shuffleArray(data);
  return data.slice(0, number).join(' ');
}
export function cipsumParagraph(number = 1) {
  let paragraphs = [];
  for (let i = 0; i < number; i++) {
    paragraphs.push(cipsumSentence(randomIntFromInterval(2, 4)));
  }
  return paragraphs;
}