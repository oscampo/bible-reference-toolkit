import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

export const generateOrdinalNameVariations = (number: number, names: string[]): string[] => {
  var variations: string[] = [];
  var numerals: string[];
  if (number === 1) {
    numerals = ['1', 'I', 'First'];
  } else if (number === 2) {
    numerals = ['2', 'II', 'Second'];
  } else if (number === 3) {
    numerals = ['3', 'III', 'Third'];
  }
  names.forEach((name) => {
    numerals.forEach(function (numeral: string) {
      variations.push(numeral + name);
      variations.push(numeral + ' ' + name);
    });
  });
  return variations
}

const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);

export const readJSONFilesInDirectory = async (directoryPath: string) => {
  try {
    const files = await readdirAsync(directoryPath);

    // Filter the files to only include JSON files
    const jsonFiles = files.filter((file) => path.extname(file) === '.json');

    const jsonDataArray = await Promise.all(
      jsonFiles.map(async (jsonFile) => {
        const filePath = path.join(directoryPath, jsonFile);
        const data = await readFileAsync(filePath);
        return JSON.parse(data.toString());
      })
    );

    return jsonDataArray;
  } catch (err) {
    console.error('Error reading JSON files:', err);
    throw err;
  }
}
