import type { ICharacter, IQuizList } from "~/types/quizList";
import { defineEventHandler } from "h3";

interface IGraphQLResponse {
  data: {
    charactersByIds: ICharacter[];
  };
}

export default defineEventHandler(async (): Promise<IQuizList[]> => {
  const totalCharacters = 826;
  const quizzes: IQuizList[] = [];
  const usedIds = new Set<number>();

  const getUniqueRandomIds = (count: number): number[] => {
    const ids = new Set<number>();
    while (ids.size < count) {
      const id = Math.floor(Math.random() * totalCharacters) + 1;
      if (!usedIds.has(id)) {
        ids.add(id);
        usedIds.add(id);
      }
    }
    return Array.from(ids);
  };

  for (let i = 0; i < 5; i++) {
    const ids = getUniqueRandomIds(4);

    const query = `
      query ($ids: [ID!]!) {
        charactersByIds(ids: $ids) {
          id
          name
          image
        }
      }
    `;

    const variables = { ids };

    const response = await $fetch<IGraphQLResponse>(
      "https://rickandmortyapi.com/graphql",
      {
        method: "POST",
        body: JSON.stringify({ query, variables }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const characters = response.data.charactersByIds;

    const correct = characters[Math.floor(Math.random() * characters.length)];

    quizzes.push({
      image: correct.image,
      correctName: correct.name,
      optionsName: characters.map((c) => c.name),
    });
  }

  return quizzes;
});
