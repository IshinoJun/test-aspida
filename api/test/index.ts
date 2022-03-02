import { FindTestsRequest, TestDetail } from "./type";

export type Methods = {
  post: {
    status: 200
    resBody: {
      data: TestDetail[]
    }
    reqBody: FindTestsRequest
  }
}
