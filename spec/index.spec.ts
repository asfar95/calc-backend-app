import { expect } from 'chai'
import * as mocks from 'node-mocks-http'
import { indexController } from '../src/controllers/index.controller'

describe('Index Controller', function() {
  let res: mocks.MockResponse<any>

  beforeEach(() => {
    res = mocks.createResponse()
  })

  it('should return sum correctly', () => {
    let req: mocks.MockRequest<any> = {
      query: {
        x: 1,
        y: 2
      }
    }
    indexController.sum(req, res)
    const data = JSON.parse(res._getData())
    expect(data.sum).to.equal(3)
  })
})
