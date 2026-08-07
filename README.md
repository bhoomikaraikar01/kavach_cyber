# 🛡️ Kavach Cyber – AI-Powered Scam Detection System

> Detect phishing websites and spam messages using Machine Learning to help users stay safe from cyber threats.

## 📌 Overview

Kavach Cyber is an AI-powered cybersecurity application that identifies potential online scams by analyzing URLs and SMS messages. The project leverages Machine Learning models to classify phishing websites and spam messages in real time, providing users with instant security alerts.

This project aims to increase cybersecurity awareness and protect users from common online frauds.

---

## ✨ Features

- 🔗 Phishing URL Detection
- 📩 SMS Spam Detection
- 🤖 Machine Learning-based Predictions
- ⚡ Real-time Classification
- 📊 User-Friendly Interface
- 🔒 Fast and Secure Analysis

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- React.js
- Tailwind CSS

### Backend
- Python
- Flask

### Machine Learning
- Scikit-learn
- Pandas
- NumPy
- TF-IDF Vectorizer
- Multinomial Naive Bayes

### Dataset
- SMS Spam Collection Dataset
- Phishing URL Dataset

---

## 📂 Project Structure

```
kavach_cyber/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── model/
│   ├── utils/
│   └── requirements.txt
│
├── datasets/
│
├── models/
│   ├── spam_model.pkl
│   ├── phishing_model.pkl
│   └── vectorizer.pkl
│
├── screenshots/
│
├── README.md
└── LICENSE
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/bhoomikaraikar01/kavach_cyber.git
cd kavach_cyber
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Start the Flask server

```bash
python app.py
```

---

### 5. Start the frontend

```bash
npm install
npm run dev
```

---

## 🚀 How It Works

### SMS Spam Detection

1. User enters an SMS.
2. Text is preprocessed.
3. TF-IDF converts text into numerical vectors.
4. Machine Learning model predicts:
   - Spam
   - Not Spam

---

### Phishing URL Detection

1. User enters a URL.
2. URL features are extracted.
3. ML model analyzes the URL.
4. System predicts:
   - Safe
   - Phishing

---

## 🎯 Future Enhancements

- Browser Extension
- Email Scam Detection
- QR Code Scam Detection
- Voice Scam Detection
- Cyber Threat Dashboard
- User Authentication
- AI Chatbot for Cybersecurity Assistance

---

## 📈 Applications

- Personal Cybersecurity
- Educational Institutions
- Banking & Finance
- Government Organizations
- Corporate Security
- Cyber Awareness Campaigns

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👩‍💻 Author

**Bhoomika Raikar**

- GitHub: https://github.com/bhoomikaraikar01

---

## 📄 License

This project is licensed under the MIT License.
