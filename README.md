### Development
```
git pull
npm install
npm run dev
```
### Production
``` 
git pull
npm install
npm run build
pm2 start ecosystem.config.js --env production


// "start": "NODE_ENV=production node server.js",
```
