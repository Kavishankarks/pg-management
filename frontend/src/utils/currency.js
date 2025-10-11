/**
 * Format price in Indian Rupees (₹)
 * @param {number} amount - The amount to format
 * @param {boolean} showDecimals - Whether to show decimal places (default: false)
 * @returns {string} Formatted price string with ₹ symbol
 */
export const formatPrice = (amount, showDecimals = false) => {
  if (!amount || isNaN(amount)) return '₹0';

  const num = parseFloat(amount);

  // Format with Indian numbering system (lakhs and crores)
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  });

  return formatter.format(num);
};

/**
 * Format price without currency symbol
 * @param {number} amount - The amount to format
 * @returns {string} Formatted number with Indian comma placement
 */
export const formatPriceWithoutSymbol = (amount) => {
  if (!amount || isNaN(amount)) return '0';

  const num = parseFloat(amount);
  return new Intl.NumberFormat('en-IN').format(num);
};
