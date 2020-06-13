export const createPath = (name) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();
};

export const numberFormatter = new Intl.NumberFormat([], {
  style: "currency",
  currency: "BRL",
});
