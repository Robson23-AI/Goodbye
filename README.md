# Farewell Celebration – Goodbye App

A fully interactive farewell web application designed to collect goodbye messages from team members in a visually engaging and elegant way.  
The app includes animations, parallax effects, custom cursor, interactive particles, background video, music, and Firebase-based message storage with metadata collection.

## Overview

This project creates an immersive farewell experience:
- an animated login screen with password protection,
- a dynamic celebration page with animated glitter, parallax layers, confetti, music, and rotating quotes,
- real-time farewell messages stored in Firebase,
- optional redirect to a dedicated video page.

The application is deployed using GitHub Pages.

## Features

### 🔐 Password-protected access
- Custom champagne-themed login screen
- Smooth slide-in animation
- Shake animation on incorrect password

### 🎥 Interactive celebration screen
- Full-screen looping background video
- Smooth fade-in intro with a “Join” button
- Background music (auto-fade on intro skip)
- Parallax animations
- Canvas glitter + animated hearts
- Confetti explosions on events

### 💬 Farewell message board
- Add name + farewell message
- Live updates from Firebase (Realtime Database)
- Automatic sorting by newest message
- Visitor counter (“X wishes so far”)

### 🌍 Visitor metadata tracking
Each message stores:
- country
- city
- IP (or “not saved” on block)
- browser + OS
- device type
- language

Additionally, every visit is logged in Firebase via `saveVisit()`.

### 🎵 Extra features
- Farewell song page (`song.html`)
- Custom mouse cursor (champagne glass)
- Spark effects on mouse clicks
- Multiple animations and visual layers

## File Structure

├── index.html # Login page
├── main.html # Main farewell page
├── song.html # Additional video page
├── style.css # Core styling
├── firebase.js # Firebase logic (saveWish, loadWishes, saveVisit)
├── effects.js # Glitter + hearts animation
├── parallax.js # Parallax scrolling logic
├── chatbotkam.js # Small chatbot logic (optional)
├── your-music.mp3 # Background music
├── kolega-song.mp4 # Farewell song video
├── party.mp4 # Background video
├── bubbles.png
├── champagne.png
├── pearl-paper.png
├── gold-gradient.png


## Technologies Used

- **HTML5**, **CSS3**, **JavaScript**
- **Firebase Realtime Database**
- Canvas animations (glitter, sparks, parallax)
- Custom audio/video handling
- Confetti library (`canvas-confetti`)
- Geo-IP lookup via `ipapi.co`
- GitHub Pages for deployment

## Deployment

1. Push all files to GitHub.
2. Enable **GitHub Pages** → deploy from `main` branch → `/root`.
3. App will be live at:

https://<username>.github.io/Goodbye/


## Setup

To adapt the project:

### 1. Update Firebase config
In `firebase.js`, replace the config block with your own:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
2. Change the login password

In index.html:
const poprawne = "xxxxxx";
Change to any string.

3. Replace media files (optional)

party.mp4

your-music.mp3

kolega-song.mp4

background images (png files)

License

This project is personal and was built for internal farewell celebration purposes.
You may adapt it for your own private events.
