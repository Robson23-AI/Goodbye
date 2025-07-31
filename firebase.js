// ✅ Import Firebase z CDN (modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getFirestore, collection, addDoc, onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ✅ Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNfuMrNuMLfqB0VQAStyxEo2YCOfYsb08",
  authDomain: "farawell-app.firebaseapp.com",
  projectId: "farawell-app",
  storageBucket: "farawell-app.appspot.com",
  messagingSenderId: "615791844906",
  appId: "1:615791844906:web:a9fa0d7305dc97181f2d53"
};

// ✅ Start Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("✅ Firebase initialized");

// ------------------------------------------------
// 📝 FUNKCJE DLA MAIN.HTML (życzenia)
// ------------------------------------------------

// 📤 Zapisanie życzenia do Firestore (rozszerzone o dodatkowe dane)
export async function saveWish(name, wish, extraData = {}) {
  try {
    await addDoc(collection(db, "wishes"), {
      name: name,
      wish: wish,
      timestamp: new Date(),
      ...extraData   // 👈 wszystkie dodatkowe pola (np. miasto, przeglądarka) dodadzą się tutaj
    });
    console.log(`✅ Życzenie zapisane: ${name} – ${wish}`);
  } catch (e) {
    console.error("❌ Błąd przy dodawaniu życzenia: ", e);
  }
}

// 📥 Pobieranie życzeń w czasie rzeczywistym (live update)
export function loadWishes(callback) {
  onSnapshot(collection(db, "wishes"), (snapshot) => {
    const wishes = snapshot.docs.map(doc => doc.data());
    callback(wishes);
  });
}

// ------------------------------------------------
// 🎵 FUNKCJE DLA SONG.HTML (statystyki)
// ------------------------------------------------

// 🔢 Logowanie wizyty (każde otwarcie song.html)
export async function logVisit() {
  try {
    await addDoc(collection(db, "stats"), {
      type: "visit",
      timestamp: new Date()
    });
    console.log("👀 Wizyta zapisana w bazie");
  } catch (e) {
    console.error("❌ Błąd przy logowaniu wizyty: ", e);
  }
}

// ▶ Liczenie kliknięć „Play Song”
export async function logPlay() {
  try {
    await addDoc(collection(db, "stats"), {
      type: "play",
      timestamp: new Date()
    });
    console.log("🎵 Play Song zapisany w bazie");
  } catch (e) {
    console.error("❌ Błąd przy logowaniu play: ", e);
  }
}

// ------------------------------------------------
// 📊 NOWA FUNKCJA – zapisywanie lokalizacji wizyty
// ------------------------------------------------

export async function saveVisit(data) {
  try {
    await addDoc(collection(db, "visits"), {
      timestamp: data.timestamp || new Date(),
      country: data.country || "unknown",
      city: data.city || "unknown",
      ip: data.ip || "not saved"
    });
    console.log("✅ Wizyta z lokalizacją zapisana w bazie");
  } catch (e) {
    console.error("❌ Błąd przy zapisie wizyty z lokalizacją: ", e);
  }
}
