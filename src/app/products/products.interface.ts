export interface ProductsResponseModel {
  count: number;
  next: string;
  num_pages: number;
  page: number;
  page_size: number;
  previous: string;
  results: Array<ProductsModel>;
}

export interface ProductsModel {
  description: string,
  id: number,
  image: string,
  name: string,
  price: string,
  selling_unit: string
};
