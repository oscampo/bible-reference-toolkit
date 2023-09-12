import Reference from '../lib/reference';
import Range from '../lib/range';

test('distance() returns the distance between the References', () => {
  let start = new Reference('Genesis 1:1');
  let end = new Reference('Exodus 1:1');
  let range = new Range(start, end);
  let distance = range.distance();
  expect(distance.books).toBe(1);
  expect(distance.chapters).toBe(50);
  expect(distance.verses).toBe(1533);
});
