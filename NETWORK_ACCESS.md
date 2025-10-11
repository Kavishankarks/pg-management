# Network Access Guide for BookPG

This guide explains how to access your BookPG application from different devices and over the internet.

## Current Configuration

Your application is now configured to be accessible beyond localhost:

- **Frontend (Vite)**: Running on port `5173` with network access enabled
- **Backend (Express)**: Running on port `5001` with CORS enabled for local networks
- Both services listen on all network interfaces (`0.0.0.0`)

## Access Methods

### 1. Local Machine (Same Computer)

**Frontend**: http://localhost:5173
**Backend**: http://localhost:5001

### 2. Local Network (Same WiFi)

When you start the servers, look for the network addresses in the console output:

#### Frontend
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.x:5173/  <-- Use this on other devices
```

#### Backend
```
Local: http://localhost:5001
Network: http://192.168.1.x:5001  <-- Backend network address
```

**To access from another device on the same WiFi:**
1. Make sure both devices are on the same WiFi network
2. Use the Network IP address shown in the console
3. Example: `http://192.168.1.100:5173` (replace with your actual IP)

### 3. Internet Access (Using ngrok)

To make your application accessible from anywhere on the internet:

#### Install ngrok

**Option A: Using npm**
```bash
npm install -g ngrok
```

**Option B: Download from website**
Visit https://ngrok.com/download and follow installation instructions

#### Setup ngrok

1. **Sign up for a free account** at https://ngrok.com
2. **Get your auth token** from the dashboard
3. **Configure ngrok**:
```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

#### Run ngrok for Backend

```bash
ngrok http 5001
```

You'll see output like:
```
Forwarding  https://abc123.ngrok-free.app -> http://localhost:5001
```

Copy the `https://...ngrok-free.app` URL.

#### Update Frontend Configuration

1. **Stop the frontend dev server** (Ctrl+C)

2. **Update the backend API URL**:

Create or edit `/Users/kavishankarks/Documents/GitHub/bookpg/frontend/.env`:

```env
VITE_API_URL=https://abc123.ngrok-free.app/api
```

Replace `abc123.ngrok-free.app` with your actual ngrok URL.

3. **Restart the frontend server**:
```bash
npm run dev
```

#### Run ngrok for Frontend (Optional)

If you want the frontend accessible via a public URL too:

```bash
ngrok http 5173
```

Copy the URL (e.g., `https://xyz789.ngrok-free.app`) and share it.

### 4. Alternative: Using localtunnel

**Install**:
```bash
npm install -g localtunnel
```

**Expose Backend**:
```bash
lt --port 5001
```

**Expose Frontend**:
```bash
lt --port 5173
```

## Important Notes

### CORS Configuration
The backend is configured to automatically allow:
- Localhost connections
- Local network IPs (192.168.x.x, 10.x.x.x)
- ngrok domains (*.ngrok-free.app)

### Security Considerations

1. **Development Only**: This configuration is for development. Don't use in production.

2. **Firewall**: Your device firewall may block network access. You may need to:
   - On macOS: System Preferences > Security & Privacy > Firewall
   - On Windows: Windows Defender Firewall > Allow an app

3. **ngrok Free Limitations**:
   - URLs change each time you restart ngrok
   - Limited bandwidth and connections
   - Shows ngrok warning page to visitors

### Environment Variables

For permanent ngrok URLs or custom domains:

**Backend .env**:
```env
NGROK_URL=https://your-custom-url.ngrok-free.app
CORS_ORIGIN=http://localhost:5173
```

**Frontend .env**:
```env
VITE_API_URL=https://your-backend-url.ngrok-free.app/api
```

## Troubleshooting

### Can't Access from Other Devices

1. **Check firewall settings**
2. **Verify both devices are on same WiFi**
3. **Try pinging the IP**: `ping 192.168.1.x`
4. **Check the IP is correct** in the console output

### CORS Errors

1. **Restart both servers** after changing .env files
2. **Check the browser console** for the actual error
3. **Verify the API URL** in frontend .env

### ngrok Errors

1. **Make sure you're authenticated**: `ngrok config add-authtoken YOUR_TOKEN`
2. **Check if the port is correct**: Should match your backend port (5001)
3. **Free tier limitations**: Only 1 ngrok tunnel at a time on free plan

## Production Deployment

For permanent public access, consider deploying to:

**Frontend**:
- Vercel (recommended)
- Netlify
- GitHub Pages

**Backend**:
- Render
- Railway
- Fly.io
- Heroku

**Database**:
- Neon (PostgreSQL)
- Supabase
- Railway PostgreSQL

## Quick Commands Reference

```bash
# Start development servers
cd backend && npm run dev
cd frontend && npm run dev

# Start ngrok
ngrok http 5001  # For backend
ngrok http 5173  # For frontend

# Get your local IP (macOS/Linux)
ifconfig | grep "inet " | grep -v 127.0.0.1

# Get your local IP (Windows)
ipconfig | findstr IPv4
```

## Support

For issues or questions:
1. Check the console output for error messages
2. Verify all services are running
3. Test with `curl` or Postman first
4. Check CORS and network settings
