export class Post {
  id: number
  text: string
  username: string
  name: string
  created_at: number
  image_src: string

  constructor() {
    this.image_src = 'assets/images/user.jpg'
    this.username = '@eduardogodoi'
    this.name = 'Eduardo K. Godoi'
  }
}
