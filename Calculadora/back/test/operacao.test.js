const { Calcular } = require("../src/models/calcModel");

/* TESTES SOMA */
test('Teste 1 - Soma', async () => {
  let res = await Calcular("1 + 2533");
  expect(res).toBe(2534);

  res = await Calcular("5 + 2");
  expect(res).toBe(7);

  res = await Calcular("1.1 + 80.04");
  expect(res).toBe(81.14);

  res = await Calcular("1 + (-1)");
  expect(res).toBe(0);
});

/* TESTES SUBTRAÇÃO */
test('Teste 2 - Subtração', async () => {
  let res = await Calcular("15 - 300");
  expect(res).toBe(-285);

  res = await Calcular("(-10) - (-5)");
  expect(res).toBe(-5);

  res = await Calcular("1000 - (-500)");
  expect(res).toBe(1500);

  res = await Calcular("0.5 - 0.10001");
  expect(res).toBe(0.39999);
});

/* TESTES MULTIPLICAÇÃO */
test('Teste 3 - Multiplicação', async () => {
  let res = await Calcular("5 X 5");
  expect(res).toBe(25);

  res = await Calcular("(-5) X (-5)");
  expect(res).toBe(25);

  res = await Calcular("5 X (-5)");
  expect(res).toBe(-25);

  res = await Calcular("1.5 X 9");
  expect(res).toBe(13.5);
});

/* TESTES DIVISÃO */
test('Teste 4 - Divisão', async () => {
  let res = await Calcular("5 / 5");
  expect(res).toBe(1);

  res = await Calcular("(-12040) / (-42)");
  expect(res).toBe(286.66667);

  res = await Calcular("(-120) / 6");
  expect(res).toBe(-20);

  res = await Calcular("132 / (-11)");
  expect(res).toBe(-12);
});

// test('Teste 5 - Divisão por zero', async () => {
  test('Teste 5 - Divisão por zero', async () => {
  let res = await Calcular("1 / 0");
  expect(res).toBe("Infinity");

  res = await Calcular("0 / 0");
  expect(res).toBe("Infinity");
});

// });

// test('Teste 6 - Num + Operador', async () => {
  test('Teste 6 - Expressão incompleta com operador no final', async () => {
  let res = await Calcular("3 +");
  expect(res).toBe(6); // 3 + 3

  res = await Calcular("6 -");
  expect(res).toBe(0); // 6 - 6

  res = await Calcular("2 X");
  expect(res).toBe(4); // 2 * 2

  res = await Calcular("10 /");
  expect(res).toBe(1); // 10 / 10

  res = await Calcular("5 x");
  expect(res).toBe(25); // 5 * 5 (aceitando 'x' minúsculo)

  res = await Calcular("8 /");
  expect(res).toBe(1); // 8 / 8
});

// });