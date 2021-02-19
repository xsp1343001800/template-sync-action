/**
 * Diff Match and Patch
 * Copyright 2018 The diff-match-patch Authors.
 * https://github.com/google/diff-match-patch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * Determine the common suffix of two strings.
 *
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 *
 * @return {number} The number of characters common to the end of each string.
 */
export const commonSuffix = (text1: string, text2: string): number => {
  // Quick check for common null cases.
  if (
    !text1 ||
    !text2 ||
    text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)
  ) {
    return 0
  }
  // Binary search.
  // Performance analysis: https://neil.fraser.name/news/2007/10/09/
  let pointerMin = 0
  let pointerMax = Math.min(text1.length, text2.length)
  let pointerMid = pointerMax
  let pointerEnd = 0

  while (pointerMin < pointerMid) {
    if (
      text1.substring(text1.length - pointerMid, text1.length - pointerEnd) ==
      text2.substring(text2.length - pointerMid, text2.length - pointerEnd)
    ) {
      pointerMin = pointerMid
      pointerEnd = pointerMin
    } else {
      pointerMax = pointerMid
    }

    pointerMid = Math.floor((pointerMax - pointerMin) / 2 + pointerMin)
  }

  return pointerMid
}
