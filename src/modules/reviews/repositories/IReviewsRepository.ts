import { ReviewDocument as Review } from '../infra/mongoose/schemas/Review';

import ICreateReview from '../dtos/ICreateReview';
import IListFilters from '../dtos/IListFilters';

export default interface IReviewRepository {
  findById(id: string): Promise<Review | null>;
  listByEstablishment(establishmentId: string): Promise<Review[]>;
  create(data: ICreateReview): Promise<Review>;
  listWithFilters(filters: IListFilters): Promise<Review[]>;
  save(review: Review): Promise<Review>;
}
