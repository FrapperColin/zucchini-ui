import escape from 'lodash/escape';

export default function html(strings, ...args) {
  return strings.reduce((prevValue, currentValue, index) => {
    const arg = args[index - 1];
    return prevValue + escape(arg) + currentValue;
  });
}
