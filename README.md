# Salario


[[Application URL](https://krzys1u.github.io/salario/)]


Purposes of this project is to show differences between various types of employment in Poland.

You can compare between:

- CoE
- CoE with Creative Rights
- B2B with line tax and Various ZUS
 
## Setup database
You need to copy file `example.env`, name it `.env` and set postgres database credential in it.
After that you need to run `yarn run db:migrate` 
  
## Application configuration
Configuration file is `src/config.js`

## Preparing data
Run `yarn run data:prepare` to fetch fresh data and put it into database

## API
Functions from `api` directory are deployed as function in vercel, if you forked this repository you need to integrate your repository with vercel
After that you need specify `API_URL` in `src/config.js` 

## Development
Run 
```
yarn
yarn start
```

## Deployment
After merge changes to master new version of page will be published as static page in github pages.
Api functions will be deployed to vercel
