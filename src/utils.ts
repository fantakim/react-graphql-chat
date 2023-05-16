import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';

export default class Utils {
  static mapWithSeparator<T>(
    source: Iterable<T>,
    separator: ReactNode,
    mapfn: (x: T) => ReactNode
  ) {
    const result: ReactNode[] = [];

    const iter = source[Symbol.iterator]();

    let { value: current, done } = iter.next();
    if (done) return result;

    let last = current;
    ({ value: current, done } = iter.next());

    let i = isValidElement(separator) ? 0 : undefined;
    while (!done) {
      result.push(mapfn(last));
      if (i !== undefined)
        result.push(
          cloneElement(separator as ReactElement, { key: 'sep_' + i++ })
        );
      else result.push(separator);
      last = current;
      ({ value: current, done } = iter.next());
    }
    result.push(mapfn(last));
    return result;
  }

  static getInitials(fullName: string) {
    const allNames = fullName.trim().split(' ');
    const initials = allNames.reduce((acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, '');
    return initials;
  }

  static isValidEmail(email: string) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  }

  static invokeBlur() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
}
