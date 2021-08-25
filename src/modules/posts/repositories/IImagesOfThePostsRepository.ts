interface IImagesOfThePostsRepository {
  create(imagesOfThePosts: string, post_id: string): Promise<void>;
}

export { IImagesOfThePostsRepository };
