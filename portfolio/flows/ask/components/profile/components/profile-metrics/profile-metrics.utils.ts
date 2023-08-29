export const formatMetrics = (metrics: number, singularSuffix: string, pluralSuffix: string) => {

  if (metrics === 0) return `${metrics} ${pluralSuffix}`;

  if (metrics === 1) return `${metrics} ${singularSuffix}`;

  const { format } = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

  return `${format(metrics)} ${pluralSuffix}`;
}