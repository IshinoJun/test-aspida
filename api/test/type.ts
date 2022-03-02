export type FindTestsRequest = {
  keyword?: number
  limit: number
  offset: number
}

export type TestDetail = {
  id: string
  title: string
  content: string[]
}