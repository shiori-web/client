import { helper } from '@ember/component/helper';
import { isEmpty as _isEmpty } from '@ember/utils';

export function isEmpty([value = '']) {
  return _isEmpty(value);
}

export default helper(isEmpty);
