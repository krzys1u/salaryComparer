# Salario
Purposes of this project is to show differences between various types of employment in Poland.

You can compare between:

- UoP
- UoP with Creative Rights
- B2B with 19% tax and Various ZUS
 
## Preparing data
You need to download credentials file from firebase, set name to `authKey.json` and put it in root directory. 
After that you can run `yarn run data:prepare`

## Development
Run 
```
yarn
yarn start
```

## Deployment
After merge changes to master, version will be bumped and tag will be created, 
after tag creation new version of page will be published as static page in github pages.
If you don't specify versionType in commit message or pull request name minor version will be bumped up.

