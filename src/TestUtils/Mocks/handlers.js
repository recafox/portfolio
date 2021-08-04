import { rest } from "msw";
import urls from "../../Constants/url";
import { profileResponse, demoListResponse, expListResponse } from "../Data";

export const handlers = [
  rest.get(urls.profileURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(profileResponse));
  }),
  rest.get(urls.demoURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(demoListResponse));
  }),
  rest.get(urls.expURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(expListResponse));
  }),
];
