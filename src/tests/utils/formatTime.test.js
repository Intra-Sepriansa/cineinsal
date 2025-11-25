import { formatDuration } from '../../utils/formatTime';

test('formats duration correctly', () => {
  expect(formatDuration(60)).toBe('1:00');
  expect(formatDuration(3661)).toBe('1:01:01');
  expect(formatDuration(0)).toBe('0:00');
});
