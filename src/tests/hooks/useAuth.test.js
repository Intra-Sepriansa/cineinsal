import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth } from '../../hooks/useAuth';
import { AuthProvider } from '../../context/AuthContext';

test('useAuth provides authentication state', () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  const { result } = renderHook(() => useAuth(), { wrapper });

  expect(result.current.isAuthenticated).toBe(false);
  expect(result.current.user).toBeNull();
});
