### Repo Love 💘

👩‍💻👨‍💻 -- Send engineers reminders via slack to keep your repos up to date.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=thenationofalex_repo-love&metric=alert_status)](https://sonarcloud.io/dashboard?id=thenationofalex_repo-love)
[![Build Status](https://travis-ci.org/thenationofalex/repo-love.svg?branch=master)](https://travis-ci.org/thenationofalex/repo-love)
[![Coverage Status](https://coveralls.io/repos/github/thenationofalex/repo-love/badge.svg?branch=master)](https://coveralls.io/github/thenationofalex/repo-love?branch=master)

#### 🔨 Built with

- [TypeScript](https://www.typescriptlang.org/)
- [Octokit](https://github.com/octokit/core.js#rest-api-example)
- [Slack Web API](https://www.npmjs.com/package/@slack/web-api)
- [DotDev Defaults](https://www.npmjs.com/package/dotenv-defaults)

#### Setup

- Add API tokens in `.env file`, copy template from `.env.default`
- The `CHANNEL_ID` is used to fetch a list of engineers. [How to find the channel id](https://stackoverflow.com/a/57246565)
- Setup slack app

#### 📖 Slack App Notes

When setting up the app it will require the following scopes oauth enabled along with the Bot User OAuth Access Token:

__Bot Token Scopes__

- channels:read
- chat:write
- usergroups:read
-	users:read

#### 📖 Commands

Command                | Purpose
:--------------------- | :----------------------------------------------
`npm run dev`          | Run script locally
`npm run build`        | Compile application
