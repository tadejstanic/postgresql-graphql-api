import { GraphQLError } from "graphql";

export class ValidationError extends GraphQLError {
  state: object[];
  code: number;

  constructor(errors) {
    super("The request is invalid.");
    this.state = errors;
    this.code = 422;
  }
}
