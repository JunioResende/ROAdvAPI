interface IImagesOfThePostsRepository {
  create(imagesOfThePosts: string, postID: string): Promise<void>;
}

export { IImagesOfThePostsRepository };
