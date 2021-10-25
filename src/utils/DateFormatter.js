export function DateFormatter(timestamp) {
  const date = new Date(timestamp);
  const timeNow = date.toLocaleTimeString("en-US");

  return (
    timeNow.substr(0, 5) + timeNow.slice(-2) + " | " + date.toLocaleDateString()
  );
}
