# Resume Analyzer

A project designed to analyze resumes based on specific job descriptions.  
Built with **React Router** and [PuterJs](https://docs-puter-com.translate.goog/supported-platforms/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc).

The application uses AI to evaluate both the resume and its ATS compatibility, checking whether it aligns with a given job description in order to increase the candidate’s chances of getting an interview.

Puter.js was used to simplify AI integration, authentication, and PDF file handling.  
Thanks to Puter, there is no need to manage API keys or complex configurations — simply run `npm run dev` and the project is ready to use.

## 🛠 Tech Stack

- **React**
- **React Router**
- **Puter.js** (Authentication, AI integration, PDF handling)

This project was built using React Router to deepen my understanding of routing outside of Next.js.  
While I typically use standard React or Next.js, I wanted to explore different architectural approaches and routing strategies.

Puter.js was used to handle:

- Authentication
- PDF file uploads and processing
- Direct AI interaction

---

## 🏗 Architecture

The project follows a simple and organized structure.

### `/app`

Contains:

- Components  
- Routes  
- `lib` folder  

### `/app/lib`

- Puter configuration files  
- Service setup for AI and authentication  

The structure keeps routing logic and service configuration separated from UI components.

---

## ✨ Features

- Upload a resume (PDF)
- Provide a job description
- AI evaluates compatibility between resume and job
- ATS alignment analysis
- Score from **0 to 100**
- Suggestions on how to improve the resume

---

## 📦 Installation

After cloning the repository, simply run:

```bash
npm run dev
```
---

## 🚀 Demo

A simple, direct, yet powerful and practical application.

https://github.com/user-attachments/assets/7109c589-ce14-45a7-b351-13648fc97fff

<img width="841" height="783" alt="Screenshot 2" src="https://github.com/user-attachments/assets/d1dbdae1-b5b2-41ca-ae40-f1c8cedf1687" />
<img width="841" height="923" alt="Screenshot 3" src="https://github.com/user-attachments/assets/0568367b-c927-4caf-9da0-29f103c7a047" />
<img width="1623" height="969" alt="Screenshot 4" src="https://github.com/user-attachments/assets/2c89163d-b3d6-4285-a72e-f80eef1235d2" />

---
