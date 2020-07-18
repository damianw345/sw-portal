export class ErrorMessage {
  constructor(
    public code: string,
    public message: string,
    public dateTime: Date,
    public refNumber: string,
    public details?: string[],
  ) {
  }
}
