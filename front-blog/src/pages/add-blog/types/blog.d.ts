export type BlogType<WithType extends object = {}> = WithType & {
  dateCreated: string
  content: string
  title: string
}
