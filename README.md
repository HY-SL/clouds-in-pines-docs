# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## push to github

\# 进入项目目录    cd E:\CloudsinPines\clouds-in-pines-docs 

\# 暂存修改            git add docusaurus.config.js 

\# 提交修改            git commit -m "fix: 适配Netlify部署的配置修改" 

\# 推送到GitHub   git push origin master
