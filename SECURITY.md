\# 🔒 Security Information for Farewell Celebration



\## 🎯 Why is there an API key in the code?



This project uses \*\*Firebase\*\* (Firestore \& Authentication) directly in the browser.  

Firebase requires an API key for initialization – this key \*\*must be public\*\* for frontend apps to work.



\*\*Important:\*\*  

This key does \*\*NOT\*\* give full access to the project or Google Cloud account.



---



\## ✅ How is the key protected?



1️⃣ \*\*Domain Restriction\*\*

\- The key only works on this domain:  

&nbsp; `https://robson23-ai.github.io/\*`



➡ Any attempt to use this key from another website will fail.



2️⃣ \*\*API Restriction\*\*

\- The key is limited to essential Firebase services only:

&nbsp; - Cloud Firestore API

&nbsp; - Identity Toolkit API (Authentication)

&nbsp; - Firebase Installations API

&nbsp; - Cloud Storage for Firebase API (if needed)



➡ The key cannot call any other Google APIs.



---



\## 🚀 What does this mean for security?



\- 🔓 The key is visible in the code (as required for Firebase frontend apps).  

\- 🔒 It is \*\*useless\*\* outside the approved domain and APIs.  

\- 🛡 No sensitive admin credentials or write-access secrets are stored in this repository.



---



\## 📬 Reporting Issues



If you notice any security concerns, please open an \*\*Issue\*\* or contact the repository owner.



