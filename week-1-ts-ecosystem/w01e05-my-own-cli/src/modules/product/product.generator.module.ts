import { faker } from '@faker-js/faker';
import { Product, ProductType } from './product.module';

export function createRandomProduct(productType: ProductType): Product {
  return {
    price: Number(faker.commerce.price(100, 200)),
    title: faker.commerce.product() as string,
    id: faker.datatype.uuid(),
    type: productType,
    quantity: faker.mersenne.rand(38,43)
  };
}

export const createFakeArray  = (productType: ProductType, quantity: number) => {
    const fakeProducts: Product[] = [];
     Array.from({ length: quantity }).forEach(() => {
        fakeProducts.push(createRandomProduct(productType));
    });
    return fakeProducts
}

