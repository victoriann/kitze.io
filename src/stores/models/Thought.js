class Thought {

  _id;
  content;
  createdAt;
  slug;
  status;
  title;

  constructor({content, created_at, slug, status, title, _id}) {
    this.content = content;
    this.createdAt = created_at;
    this.slug = slug;
    this.status = status;
    this.title = title;
    this.id = _id;
  }
}

export default Thought;