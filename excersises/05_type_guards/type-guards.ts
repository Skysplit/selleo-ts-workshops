import { GoogleDocument, HttpError, WordDocument } from "./type-guards.helpers";

// action result should be added to state
type MultiplyAction = { type: "multiply"; factor: number };
type AddAction = { type: "add"; summand: number };
type SubtractAction = { type: "subtract"; subtrahend: number };
type ResetAction = { type: "reset" };

export function calculatorReducer(
  state: number,
  action: MultiplyAction | AddAction | SubtractAction | ResetAction
) {
  switch (action.type) {
    case "add": {
      return state + action.summand;
    }
    case "multiply": {
      return state * action.factor;
    }
    case "subtract": {
      return state - action.subtrahend;
    }
    case "reset": {
      return 0;
    }
  }
}

export function printDocument(document: WordDocument | GoogleDocument) {
  if (document instanceof GoogleDocument) {
    return document.fetchContent();
  }

  return document.readContent();
}

export function createArray(options: number | { fill: string; size: number }) {
  if (typeof options === "number") {
    return Array.from({ length: options }).map(() => "");
  }

  return Array.from({ length: options.size }).map(() => options.fill);
}

export function getAccountName(
  account: { nickname: string } | { firstName: string; lastName: string }
) {
  if ("nickname" in account) {
    return account.nickname;
  }

  return `${account.firstName} ${account.lastName}`;
}

export function displayPoint(value?: number | null) {
  if (value === null || value === undefined) {
    return "-";
  }

  return value.toFixed(2);
}

export function isHttpError(error: Error): error is HttpError {
  return "status" in error;
}
