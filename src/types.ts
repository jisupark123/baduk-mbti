export interface ResponseType {
  ok: boolean;
  error?: string;
  [key: string]: any;
}

export interface GetMbtiResponse extends ResponseType {
  testerCount: number;
}

export interface PostMbtiResponse extends ResponseType {
  myMbtiPercentage: number;
}
