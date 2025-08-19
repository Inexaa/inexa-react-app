// General utility functions

/**
 * Capitalizes the first character of a string and lowercases the rest.
 * Also replaces underscores with spaces.
 * @param {string} str
 * @returns {string}
 */
export function capitalizeFirst(str) {
  if (!str) return '';
  const withSpaces = str.replace(/_/g, ' ');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

/**
 * Formats an ISO date string to a short date format.
 * Default: 'DD MMM YY' (e.g., '04 Aug 25').
 * Supported formats:
 *   - 'DD MMM YY' (default)
 *   - 'DD/MM/YY'
 *   - 'MMM DD, YY'
 * @param {string} isoString
 * @param {string} [format] - Optional format string
 * @returns {string}
 */
export function formatDateShort(isoString, format = 'DD MMM YY') {
  if (!isoString) return '';
  const date = new Date(isoString);
  if (isNaN(date)) return '';
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const monthNum = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  switch (format) {
    case 'DD/MM/YY':
      return `${day}/${monthNum}/${year}`;
    case 'MMM DD, YY':
      return `${month} ${day}, ${year}`;
    case 'DD MMM YY':
    default:
      return `${day} ${month} ${year}`;
  }
}

// Utility: Parse course_modules HTML into array of {title, breakDownInfo, breakDownImage, breakDownImageAlt}
export function parseModuleBreakdown(html) {
  if (!html) return [];
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const nodes = Array.from(tempDiv.childNodes);
  const modules = [];
  let currentTitle = null;
  nodes.forEach(node => {
    if (node.nodeName === 'P') {
      currentTitle = node.innerHTML;
    } else if (node.nodeName === 'UL' && currentTitle) {
      modules.push({
        title: currentTitle,
        breakDownInfo: node.outerHTML,
        breakDownImage: '/images/blue_list_A.svg',
        breakDownImageAlt: 'list icon',
      });
      currentTitle = null;
    }
  });
  return modules;
} 