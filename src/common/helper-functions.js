export const getCurrentYearMonth = () =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1
  }`;
