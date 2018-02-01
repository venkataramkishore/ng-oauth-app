class User {
  public username: string;
  public firstName: string;
  public lastName: string;

  constructor(item: any) {
    this.username = item.username;
    this.firstName = item.firstName;
    this.lastName = item.lastName;
  }
}

export class AuthResponse {
  public message: string;
  public type: string;
  public user: User;

  constructor(data: any) {
    this.message = data.message;
    this.type = data.type;
    this.user = new User(data.user);
  }
}
