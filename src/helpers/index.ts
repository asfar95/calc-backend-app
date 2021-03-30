import { sync } from 'glob'
import { union } from 'lodash'

export const files = (location: string): string[] => {
  return union([], sync(location))
}
