export const convertPrice = (price) => {
  const format = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  };
  return price.toLocaleString('us-US', format);
};
