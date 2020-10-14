/**
 * Function returns string: 'xs' || 'sm' || 'md' || 'lg' || 'xl' ,
 * default - 'lg'
 *
 * xs < 600 sm < 960 md < 1264 lg < 1904 xl
 *
 * @param clientWidth document.documentElement.clientWidth
 */

function viewportBreakpoints(clientWidth: number): string {
  const width: number = clientWidth;
  if (width < 600) {
    return 'xs'; // Extra small
  }
  if (600 <= width && width < 960) {
    return 'sm'; // Small
  }
  if (960 <= width && width < 1264) {
    return 'md'; // Medium
  }
  if (1264 <= width && width < 1904) {
    return 'lg'; // Large
  }
  if (1904 <= width) {
    return 'xl'; // Extra large
  }
  return 'lg';
}

export { viewportBreakpoints };
