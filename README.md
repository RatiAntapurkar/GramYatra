
```markdown
# GramYatra

GramYatra is a web-based platform designed to promote rural tourism by connecting travelers with village experiences, local culture, and stays.

## 🚀 How to Clone the Repository

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/RatiAntapurkar/GramYatra.git](https://github.com/RatiAntapurkar/GramYatra.git)

```

2. **Install Dependencies:**
Run the following commands to install packages for each folder:
```bash
cd GramYatra

# Frontend
cd frontend && npm install && cd ..

# Backend
cd backend && npm install && cd ..

# Admin
cd admin && npm install && cd ..

```



## ⚙️ Configuration

1. Create a `.env` file in the root/backend directory (use `.env.example` as a guide).
2. Add your **MongoDB URL** in `backend/config/db.js` or within your `.env` file.

## 🛠️ To Start the Project

You will need to open **three separate terminals** (or split your terminal) to run all parts of the application simultaneously:

### 1. Backend Server

```bash
cd backend
npm run server

```

### 2. Frontend (User Interface)

```bash
cd frontend
npm run dev

```

### 3. Admin Panel

```bash
cd admin
npm run dev

```

