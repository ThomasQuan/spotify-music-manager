export class ErrorResponse extends Error {
  status: number;
  body: unknown;
  /**
   * @param {Response} response
   * @param {any} body
   */
  constructor(response: Response, body: unknown) {
    super(response.statusText);
    this.status = response.status;
    this.body = body;
  }
}
