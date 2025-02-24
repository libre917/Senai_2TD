//é a media de notas
{
  console.log(
    "---------------------Média entre duas notas---------------------\n"
  );
  let nota1 = 5;
  let nota2 = 7;
  const media = (nota1 + nota2) / 2;

  console.log("a média das duas notas é:", media);
}
//calculo de imc
{
  console.log("\n---------------------Calculo de IMC---------------------\n");
  const altura = 1.67;
  let peso = 72;
  const IMC = peso / altura ** 2;

  console.log("o seu IMC é de:", parseFloat(IMC).toFixed(1));
}
//exibição da temperatura em fahrenheit
{
  console.log(
    "\n---------------------Exibição da temperatura em fahrenheit---------------------\n"
  );
  let celsius = 32;
  let fahrenheit = celsius * 1.8 + 32;

  console.log("a temperatura é de:", fahrenheit, "°F");
}
//calculo de compra com percentual
{
  console.log(
    "\n---------------------Calculo de compra com percentual---------------------\n"
  );
  const Produto = "ceral";
  let preco = 45;
  let desconto = 15;
  const precoFinal = preco - preco * (desconto / 100);

  console.log(
    "Com o desconto de:",
    desconto+
    "%, o preço total foi de:",
    precoFinal+
    "R$"
  );
}
//inhame
