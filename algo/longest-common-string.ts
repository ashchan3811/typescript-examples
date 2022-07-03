export class LongestCommonString {
  public static Run(s1: string, s2: string): number {
    let n1 = s1.length + 1;
    let n2 = s2.length + 1;
    let dp = [[]];

    for (let i = 1; i < n1; ++i) {
      dp[i] = [];
      for (let j = 1; j < n2; ++j) {
        if (s1[i - 1] == s2[j - 1]) {
          dp[i][j] = (dp[i - 1][j - 1] || 0) + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j] || 0, dp[i][j - 1] || 0);
        }
      }
    }

    return dp[n1 - 1][n2 - 1];
  }
}
