# CustomerIQ Full-Stack Analytics Dashboard
(React + Django + Node.js + JSON Mock Data)

CustomerIQ is a complete analytics dashboard built using **React (frontend)** with two backend options:
- **Django Backend (REST API)**
- **Node.js Backend (Express API)**

Both backends read from **local JSON files** — **NO database connection is required**.

---

## 💠 Project Architecture
```
React Frontend → REST API → JSON Files (Mock Data)
                    Django or Node.js
```

---

## 📁 Project Structure
```
project/
│
├── frontend/             # React UI
│
├── django-backend/       # Django REST API
│   └── api/data/*.json
│
├── node-backend/         # Node.js Express API
│   └── data/*.json
│
└── README.md             # This file
```

---

# ⚡ 1. HOW TO RUN THE ENTIRE PROJECT
Below are step-by-step instructions for all parts of the system.

---

# 🟦 2. React Frontend Setup
### Step 1 — Navigate to frontend folder:
```bash
cd frontend
```

### Step 2 — Install dependencies:
```bash
npm install
```

### Step 3 — Start the frontend:
For **Vite**:
```bash
npm run dev
```

### Frontend runs at:
```
http://localhost:5173/
```

---

# 🟩 3. Django Backend Setup (JSON-Based API)
### Step 1 — Install dependencies:
```bash
pip install django djangorestframework django-cors-headers
```

### Step 2 — Run server:
```bash
python manage.py runserver
```

### Django runs at:
```
http://127.0.0.1:8000/
```

---

## 📡 Django API Endpoints
| Endpoint | Description |
|---------|-------------|
| `/api/performance/` | Performance metrics |
| `/api/journey/` | Customer journey insights |
| `/api/operations/` | Delivery + warehouse + courier data |
| `/api/revenue/` | Revenue analytics |

Example:
```
GET http://127.0.0.1:8000/api/performance/
```

JSON is loaded from:
```
django-backend/data/
```

---

# 🟪 4. Node.js Backend Setup (JSON-Based API)
### Step 1 — Navigate:
```bash
cd node-backend
```

### Step 2 — Install dependencies:
```bash
npm install
```

### Step 3 — Start Node server:
```bash
npm start
```

### Node.js runs at:
```
http://localhost:5000/
```

---

## 📡 Node API Endpoint
### GET `/api/dashboard`
```
http://localhost:5000/api/dashboard
```
Returns a combined analytics JSON from:
```
node-backend/data/*.json
```

---

# 🔌 5. Connecting React to Backend
Update `useFetch()` URL in React.

### Use Django backend:
```js
useFetch("http://127.0.0.1:8000/api/performance/");
```

### Use Node backend:
```js
useFetch("http://localhost:5000/api/dashboard");
```

### Use Local JSON:
```js
useFetch("/src/data/amazonPerformance.json");
```

React automatically adapts to whichever backend is active.

---

# 📊 6. Dashboard Features
- Application performance (uptime, API latency)
- Traffic analytics
- Slowest API detection
- Customer journey funnel
- Conversion & search metrics
- Delivery delays
- Warehouse performance
- Courier analysis
- Revenue by category
- Orders over time
- AOV & refunds

All visualized via **Chart.js**.

---

