export type DataItem = {
  label: string;
  values: {
    [key: string]: number;
  };
};

type Extreme = number | undefined;

export const getExtremes = (
  data: DataItem[],
  keys?: string[]
): [Extreme, Extreme] => {
  let min: Extreme;
  let max: Extreme;

  // TODO: calculate min/max from data points nested under `values`
  // if `keys` are defined only include those sets
  // otherwise include all keys under `values`

  data.forEach((item) => {
    console.log(item);
    if (!item || typeof item !== "object") return [min, max];
    if (!item.label || typeof item.label !== "string") return [min, max];

    const itemKeys: string[] = (keys === undefined) 
    ? Object.keys(item.values)
    : keys;

    itemKeys.forEach((k) => {
      if (max === undefined || item.values[k] > max) {
        max = item.values[k];
      }
      if (min === undefined || item.values[k] < min) {
        min = item.values[k];
      }
    });
  });

  return [min, max];
};
