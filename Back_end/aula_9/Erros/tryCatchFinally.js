try {
  let pessoa = undefined;
  console.log("Nome:", pessoa.nome);
} catch (error) {
  console.log("deu erro seu burro:", error.message);
} finally{
    console.log("Acabou, então vaza")
}
