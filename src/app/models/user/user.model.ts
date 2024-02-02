export class User {
  constructor(
    private id: string,
    public username: string,
    public fullName: string,
    public avatar: string,
    public coverImage: string,
    private watchistory: any,
    private accessToken: string
  ) {}

  get userId() {
    return this.id;
  }

  get userWatchHistory() {
    return this.watchistory;
  }

  get userAccessToken() {
    return this.accessToken;
  }
}
