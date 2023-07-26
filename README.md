![next-social-login cover](https://user-images.githubusercontent.com/38794059/214441233-3ca49a7c-2df0-403d-a360-b6abebe433d8.png)

<div align="center"><strong>Automate My Stuff (Frontend)</strong></div>
<div align="center">Demo for automations. An easy authentication way to <br />Github, Google or Facebook using NextAuth.js.</div>
<br />

## Demo

1. E2E Test with Playwright: https://automate-my-stuff-frontend-uat-26e2dbaf4cf8.herokuapp.com/e2e
2. Cucumber Functional test: https://automate-my-stuff-frontend-uat-26e2dbaf4cf8.herokuapp.com/functiontest
3. Lighthouse Performance test: https://automate-my-stuff-frontend-uat-26e2dbaf4cf8.herokuapp.com/perf
4. K6 Load Testing: https://app.circleci.com/pipelines/github/AutomateMyStuff/Frontend/31/workflows/7f2aa706-423f-41f7-99b1-646a2361d104/jobs/73/artifacts (See summary.html)
5. Jest Unit Testing: https://app.circleci.com/pipelines/github/AutomateMyStuff/Frontend/31/workflows/7f2aa706-423f-41f7-99b1-646a2361d104/jobs/71/artifacts (See test-report.html)
6. All automations running on a PR: https://github.com/AutomateMyStuff/Frontend/pull/15

<div align="center">
  <img src="https://user-images.githubusercontent.com/38794059/216788052-987e13ed-45d6-4aa0-ae45-2d129b587f51.gif" width="600" />
</div>

## Running Locally

1. Install dependencies using pnpm

```sh
pnpm install
```

2. Copy `.env.local.sample` to `.env.local` and update the variables

```sh
cp .env.local.sample .env.local
```

3. Start the development server

```sh
pnpm dev
```
