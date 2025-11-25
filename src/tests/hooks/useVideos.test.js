import { renderHook } from '@testing-library/react-hooks';
import { useVideos } from '../../hooks/useVideos';
import { VideoProvider } from '../../context/VideoContext';

test('useVideos provides video data', () => {
  const wrapper = ({ children }) => <VideoProvider>{children}</VideoProvider>;
  const { result } = renderHook(() => useVideos(), { wrapper });

  expect(result.current.videos).toEqual([]);
  expect(result.current.isLoading).toBe(false);
});
