export const getButtons = (value, quantity) => {
  const NUMBER_OF_BUTTONS = value / quantity;
  return Math.ceil(NUMBER_OF_BUTTONS);
};
