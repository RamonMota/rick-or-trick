export interface IQuizList {
  image: string;
  correctName: string;
  optionsName: string[];
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
}

export enum AnswerVariant {
  CORRECT = "correct",
  WRONG = "wrong",
}

export interface IGraphQLResponse {
  data: {
    charactersByIds: ICharacter[];
  };
}

export interface IRickAndMortyCharacterListResponse {
  info: {
    count: number;
  };
}
