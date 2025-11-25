export const formatDuration = (seconds) => {
  if (!seconds) return '00:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const hDisplay = h > 0 ? `${h}:` : '';
  const mDisplay = m < 10 && h > 0 ? `0${m}:` : `${m}:`;
  const sDisplay = s < 10 ? `0${s}` : s;

  return `${hDisplay}${mDisplay}${sDisplay}`;
};
