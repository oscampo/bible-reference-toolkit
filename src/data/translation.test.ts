import { readJSONFilesInDirectory } from '../utils/utils'
import path from 'path'

describe('test translation structure', () => {
  test('test english', async () => {
    // read the file
    const en = await import('./translations/en.json')

    // check if it is an array
    expect(Array.isArray(en.default)).toBe(true)

    // check if it has 66 elements
    expect(en.default.length).toBe(66)

    // check if the first element is an array
    expect(Array.isArray(en.default[0])).toBe(true)
  })

  test('test all translations', async () => {
    const allTranslations = await readJSONFilesInDirectory(
      path.join(__dirname, './translations/')
    )

    // check if it is an array
    expect(Array.isArray(allTranslations)).toBe(true)

    for (const translation of allTranslations) {
      // check if it has 66 elements
      expect(translation.length).toBe(66)

      // check if the first element is an array
      expect(Array.isArray(translation[0])).toBe(true)
    }
  })
})
