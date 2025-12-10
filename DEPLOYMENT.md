# Bidyut Website - VPS Deployment

## Simple 3-Step Setup

### 1. Prepare VPS
```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs nginx

# Install PM2
sudo npm install -g pm2
```

### 2. Deploy Code
```bash
# Upload your code and install dependencies
git clone <your-repo>
cd bidyut-website
npm run install-all

# Configure backend
cd backend
echo "NEWS_API_KEY=93b70b4a-d48c-4ad6-b593-70eab72a88c1" > .env
echo "PORT=3001" >> .env

# Build frontend and start backend
cd ../frontend && npm run build
cd ../backend && pm2 start server.js --name "bidyut-backend"
pm2 save && pm2 startup
```

### 3. Configure Nginx
Edit `/etc/nginx/sites-available/default`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/bidyut-website/frontend/build;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
    }
}
```

```bash
sudo nginx -t && sudo systemctl restart nginx
```

## Done! 🎉

- News updates twice weekly (saves API credits)
- API key is secure on server
- Fast cached content for users

**Commands:** `pm2 status` | `pm2 logs bidyut-backend` | `pm2 restart bidyut-backend`