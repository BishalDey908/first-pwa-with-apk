# 🚀 Vite PWA → APK (Step-by-Step Guide)

This guide helps you convert your **Vite website into a PWA and then into an APK (Android app)**.

---

# 🧱 1. Create Vite Project

```bash
npm create vite@latest myApp
cd myApp
npm install
```

Run project:

```bash
npm run dev
```

---

# ⚡ 2. Convert to PWA

Install PWA plugin:

```bash
npm install vite-plugin-pwa
```

---

## 🔧 Update `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'My App',
                short_name: 'App',
                start_url: '/',
                display: 'standalone',
                background_color: '#000000',
                theme_color: '#000000',
                icons: [
                    {
                        src: '/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
})
```

---

## 🏗️ Build PWA

```bash
npm run build
```

👉 Output folder: `dist/`

---

# 📱 3. Convert PWA → Android (Using Capacitor)

Install Capacitor:

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

---

## ⚙️ Configure Capacitor

Open `capacitor.config.json`:

```json
{
    "appId": "com.myapp.app",
    "appName": "MyApp",
    "webDir": "dist"
}
```

---

## ➕ Add Android

```bash
npx cap add android
```

---

## 🔄 Sync Project

```bash
npx cap sync
```

---

# 📦 4. Build APK

---

## 🥇 Option A: WITHOUT Android Studio (Recommended for low-end PC)

### 👉 Build APK using command line

```bash
cd android
gradlew.bat clean
gradlew.bat assembleDebug
```

---

### 📂 APK Location:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🏆 Production APK

```bash
gradlew.bat assembleRelease
```

---

---

## 🥈 Option B: WITH Android Studio

1. Open project:

```bash
npx cap open android
```

2. Go to:

```
Build → Build APK(s)
```

---

# ⚠️ Common Errors & Fixes

---

## ❌ Error: invalid source release: 21

### ✅ Fix:

Open:

```
android/app/build.gradle
```

Change:

```gradle
sourceCompatibility JavaVersion.VERSION_21
targetCompatibility JavaVersion.VERSION_21
```

👉 To:

```gradle
sourceCompatibility JavaVersion.VERSION_17
targetCompatibility JavaVersion.VERSION_17
```

---

## ❌ Error: expo not installed

👉 Ignore (only for Expo projects)

---

## ❌ White Screen in APK

### Fix:

```bash
npm run build
npx cap sync
```

---

## ❌ App not updating

Always run:

```bash
npm run build
npx cap sync
```

---

## ❌ Java Errors

Check version:

```bash
java -version
```

👉 Must be **Java 17**

---

# 🔧 Required Setup

* Node.js (v18 or v20)
* Java 17
* Android SDK (optional for CLI)

---

# 🚀 Optional (Easier Way)

Use:

👉 PWABuilder (no coding needed)

Steps:

1. Open PWABuilder
2. Enter your website
3. Download APK

---

# 🎉 Done!

You now have:

* ✅ PWA website
* ✅ Android APK
* ✅ Installable mobile app

---

# 💡 Tips

* Always use HTTPS
* Add icons (192x192, 512x512)
* Test with Chrome Lighthouse

---

# ❤️ Author

Made with ❤️ using Vite + PWA + Capacitor

