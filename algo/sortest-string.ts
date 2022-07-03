export function shortestString(s: string, t: string): string {
  let m: { [key: string]: number } = {};
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    if (m[t[i]]) {
      m[t[i]] += 1;
    } else {
      m[t[i]] = 1;
      count += 1;
    }
  }

  let i = 0,
    j = 0,
    start = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  while (j < s.length) {
    m[s[j]] -= 1;

    if (m[s[j]] == 0) {
      count -= 1;
    }

    // Condition matching
    if (count == 0) {
      while (count == 0) {
        // Sorting ans
        if (ans > j - i + 1) {
          ans = Math.min(ans, j - i + 1);
          start = i;
        }

        // Sliding I
        // Calculation for removing I
        m[s[i]]++;

        if (m[s[i]] > 0) count++;

        i++;
      }
    }
    j++;
  }

  if (ans != Number.MAX_SAFE_INTEGER) return s.substring(start, ans + 1);
  else return '-1';
}
