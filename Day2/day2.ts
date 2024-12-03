import fs from 'fs';
import path from 'path';

const d2input = fs.readFileSync(path.resolve(__dirname, './day2input.txt'), 'utf-8');
const isSafeCount = d2input.split('\n').map((line) => {
  const verdict = line.trim().split(' ').reduce( (acc: number[], numString: string, i, arr) => {
    if (numString === '') return [0,0,0];
    if (acc[0] === 0) return acc;
    const num = parseInt(numString);
    if (i === 0) {
      return [1, num, num - parseInt(arr[1])];
    } else if (num-acc[1]===0 || ((num-acc[1])*acc[2])>0 || Math.abs(acc[1]-num)>3) return [0, 0, 0];
    else return [1, num, acc[1]-num];
  }, [1, 0, 0] as number[])[0];
  return verdict;
}).reduce((acc, num) => acc+num, 0)
console.log(isSafeCount);

