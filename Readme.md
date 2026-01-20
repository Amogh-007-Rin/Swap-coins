# Swap-Coins 🪙

**Swap-coins** is a robust, CLI-based cryptocurrency converter and wallet manager built with **Core Java**.

This project simulates a real-world financial application, allowing users to create accounts, manage fiat/crypto wallets, and perform live currency swaps. It is designed to demonstrate "under-the-hood" mastery of Java without relying on heavy frameworks like Spring or Hibernate.

---

## 🚀 Key Features

* **Live Currency Conversion:** Fetches real-time crypto prices via public APIs (CoinGecko).
* **User Management:** Secure registration and login using **BCrypt** password hashing.
* **Persistent Storage:** Data is stored in **PostgreSQL** (or MySQL) using raw **JDBC**.
* **Transactional Integrity:** Uses ACID-compliant transactions to ensure funds are never lost during a swap failure.
* **Connection Pooling:** Integrated **HikariCP** for enterprise-grade database performance.
* **MVC Architecture:** Clean separation of concerns (Model, View, Controller) with a DAO layer.

---

## 🛠 Tech Stack

* **Language:** Java 17+
* **Database:** PostgreSQL (Recommended) / MySQL
* **Database Access:** JDBC (No ORM used for maximum control)
* **Connection Pooling:** HikariCP
* **Security:** jBCrypt
* **JSON Parsing:** Jackson / Gson
* **HTTP Client:** Java 11 `java.net.http.HttpClient`
* **Build Tool:** Maven

---

## 📂 Project Structure

```text
Swap-coins/
├── src/
│   ├── com.swapcoins.config/      # Database & API Configurations
│   ├── com.swapcoins.controller/  # Orchestrates User Input -> Business Logic
│   ├── com.swapcoins.dao/         # Data Access Layer (Raw SQL Queries)
│   ├── com.swapcoins.model/       # POJOs (User, Wallet, Transaction)
│   ├── com.swapcoins.service/     # Business Logic (Swapping, Validation)
│   ├── com.swapcoins.view/        # CLI Interface
│   └── Main.java                  # Entry Point
└── pom.xml                        # Dependencies


⚙️ Setup & Installation
1. Prerequisites
Java JDK 11 or higher

Maven

PostgreSQL installed and running


2. Database Setup
Create a database named swapcoins_db and run the following SQL script to initialize the tables:

SQL

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE wallets (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    currency_code VARCHAR(10) NOT NULL,
    balance DECIMAL(20, 8) DEFAULT 0.00000000,
    UNIQUE(user_id, currency_code)
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    from_currency VARCHAR(10) NOT NULL,
    to_currency VARCHAR(10) NOT NULL,
    amount_swapped DECIMAL(20, 8) NOT NULL,
    amount_received DECIMAL(20, 8) NOT NULL,
    rate_at_time DECIMAL(20, 8) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

3. Configuration
Navigate to src/com/swapcoins/config/DatabaseConfig.java and update your database credentials:

Java

config.setJdbcUrl("jdbc:postgresql://localhost:5432/swapcoins_db");
config.setUsername("your_postgres_username");
config.setPassword("your_postgres_password");


4. Build and Run
Bash

# Clone the repository
git clone [https://github.com/yourusername/swap-coins.git](https://github.com/yourusername/swap-coins.git)

# Build with Maven
mvn clean install

# Run the application
java -jar target/swap-coins-1.0.jar


🖥 Usage Guide
Once the application is running in your terminal:

01. Register: Select option 1 to create a new user.

02. Login: Enter credentials to access the main dashboard.

03. View Wallet: See your balances (New users start with 0, you may need to seed the DB manually for testing).

04. Swap: Choose Swap Coins.
  a. Input: USD -> BTC
  b. Amount: 1000
  c. Result: The app fetches the live BTC price, calculates the conversion, updates your DB balance safely, and logs the transaction.

🧠 Learning Goals (Why No ORM?)

 I chose not to use an ORM (like Hibernate) for this project to deepen my understanding of:

01. SQL Fundamentals: Writing complex JOINs and schema definitions manually.

02. JDBC Lifecycles: Managing Connection, PreparedStatement, and ResultSet explicitly to prevent memory leaks.

03. Concurrency:
  - Handling database transactions (commit, rollback) manually to prevent race conditions during financial operations.


**CONTRIBUTORS**
01. AMOGH
02. PARAM
03. RAJVEER 
04. NITISH

📝 License
This project is open-source and available under the MIT License.

