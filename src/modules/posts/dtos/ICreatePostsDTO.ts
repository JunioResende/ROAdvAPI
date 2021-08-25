interface ICreatePostsDTO {
  id?: string;
  postTitle: string;
  posting: string;
  featuredImage?: string;
  userID: string;
}

export { ICreatePostsDTO };
