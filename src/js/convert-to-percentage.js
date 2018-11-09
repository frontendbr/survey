const ConvertToPercentage = (portion) => {
  return `${(( portion / 1005) * 100).toFixed(2)}%`;
};

export { ConvertToPercentage };