export function parseLanguagesToArray(translation: any): never[] {
  const arr: any = [];
  const entries = Object.entries(translation);
  entries.forEach(([key, value]: any) => {
    const obj = {
      label: value.name,
      value: key,
    };
    arr.push(obj);
  });
  return arr;
}
