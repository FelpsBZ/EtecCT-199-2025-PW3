const with3 = async (d1) => {
  let a = d1.split(" ");
  let expressao = (a[1] === "X") ? `${a[0]} * ${a[2]}` : d1;
  return eval(expressao);
};

const with2 = async (d1) => {
  let a = d1.split(" ");
  let expressao = (a[1] === "X") ? `${a[0]} * ${a[0]}` : `${a[0]} ${a[1]} ${a[0]}`;
  return eval(expressao);
};

const Calcular = async (d1) => {
  try {
      if (d1.split(' ').length === 3) {
          return parseFloat((await with3(d1)).toFixed(5));
      } else {
          return parseFloat((await with2(d1)).toFixed(5));
      }
  } catch (error) {
      return NaN;
  }
};

const calc = async (expressao) => {
  const result = await Calcular(expressao);
  return { result };
};

module.exports = {
  calc,
  Calcular
};
