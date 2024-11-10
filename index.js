// title
// body
// author
// views
// comment
//  (author , body )
// isLive

function Post(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.views = 0),
    (this.comment = {
      author: "d",
      body: "e",
    }),
    (this.isLive = isLive);
}

const object1 = new Post("a", "b", "c");
console.log(object1);
