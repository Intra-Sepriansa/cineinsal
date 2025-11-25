import { validateEmail, validatePassword } from '../../utils/validators';

test('validates email correctly', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid-email')).toBe(false);
});

test('validates password correctly', () => {
  expect(validatePassword('password123')).toBe(true);
  expect(validatePassword('short')).toBe(false);
});
