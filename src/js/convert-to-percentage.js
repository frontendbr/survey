const ConvertToPercentage = ({ portion, quantity }) => `${((portion / quantity) * 100).toFixed(2)}%`;

export { ConvertToPercentage };
