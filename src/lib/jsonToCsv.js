export default (items) => {
  if (items.length < 1) return '';

  const replacer = (key, value) => value === null ? '' : value
  const header = Object.keys(items[0])
  let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  csv.unshift(header.join(','))
  csv = csv.join('\r\n')

  return csv
};
