// utils.ts

export function formatTime(milliseconds: number): string {
  const totalSeconds: number = Math.floor(milliseconds / 1000);

  const minutes: number = Math.floor(totalSeconds / 60);
  const seconds: number = totalSeconds % 60;

  const formattedTime: string = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return formattedTime;
}
