import BookWithNamesAndChapterVersesCount from '../src/lib/books';

import fileSystem from 'fs';


let result = []

let baseJson = {}

BookWithNamesAndChapterVersesCount.forEach((book, index) => {
  result.push(book.names)
  baseJson = {
    ...baseJson,
    [index + 1]: {
      verses: book.verses,
      startNumber: book.startNumber || 0
    }
  }
});


fileSystem.writeFileSync('src/translation/en.json', JSON.stringify(result, null, 2))

// fileSystem.writeFileSync('src/translation/base.json', JSON.stringify(baseJson, null, 2))