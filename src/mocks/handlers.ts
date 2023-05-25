import { graphql } from 'msw';

export const handlers = [
  graphql.query('GreetingQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        hello: 'Hello world!',
      }),
    );
  }),
];
