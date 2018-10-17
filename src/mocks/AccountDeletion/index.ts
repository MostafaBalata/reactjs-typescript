import { chunk } from 'lodash';
import { data } from './mocked';

export function get(trackId: string, limit = 10): any {
  if (trackId) {
    return data[0];
  }

  return chunk(data, limit);
}