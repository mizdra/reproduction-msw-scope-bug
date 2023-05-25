import { rest } from 'msw';

export const handlers = [
  rest.get('/base/api/greeting', (req, res, ctx) => {
    console.log(req.url.href)
    return res(ctx.text('Hello world!'));
  }),
];
