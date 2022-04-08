const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[^\w\s]/gi, "");
};

export default removeAccents;
