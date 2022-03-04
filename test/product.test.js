import Product from "../src/model/product";
import sell from "../src/service/sellProduct";

test("should validate low stock on sell one unit", () => {
  let product = new Product("IPhone", 6500.0, 8000.0, 10);
  sell(product, 1);
  expect(product.stock).toBe(9);
});

test("should to accept sell more of one units", () => {
  let product = new Product("IPhone", 6500.0, 8000.0, 10);
  sell(product, 3);
  expect(product.stock).toBe(7);
});
