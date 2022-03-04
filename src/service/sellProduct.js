/**
 * A quantidade vendida pode ser de 1 ou mais unidades
 *  - se estoque ficar negativo, uma exception deve ser lançada
 *  - o valor de venda não pode ser maior que o valor de compra
 *  @param {*} product
 *  @param {*} amount
 */

export default function sellProduct(product, amount) {
  product.stock -= amount;

  return product;
}
