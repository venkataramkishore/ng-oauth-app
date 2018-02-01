
export class Post {
  public userId: string;
  public id: string;
  public title: string;
  public body: string;

  constructor(data: any) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.body = data.body;
  }
}