export const formatMetrics = (metrics: number, singular: string, plural: string) => {
  if (metrics >= 1_000_000) return `${metrics}m ${plural}`;
  if (metrics >= 1_000) return `${metrics}k ${plural}`;
  if (metrics === 1) return `${metrics} ${singular}`;
  return `${metrics} ${plural}`;
}
