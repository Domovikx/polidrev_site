/**
 * Function returns true or false
 * @param userAgent - window.navigator.userAgent
 */

function isMobileChecker(userAgent: string): boolean {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    )
  ) {
    return true;
  }
  return false;
}

export { isMobileChecker };
