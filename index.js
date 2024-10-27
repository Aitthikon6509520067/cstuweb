const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use true in production
}));

// Create MySQL connection pool
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '21102546',
    database: 'cstuweb',
    connectionLimit: 10,
});

// Handle registration
app.post('/register', async (req, res) => {
    const { name, email, password, phone, dob } = req.body;

    if (!name || !email || !password || !phone || !dob) {
        return res.status(400).json({ message: 'ข้อมูลไม่ครบถ้วน' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (name, email, password, phone, dob) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, hashedPassword, phone, dob], (err, result) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' });
        }
        res.status(201).json({ message: 'ลงทะเบียนสำเร็จ!' });
    });
});

// Handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [username], async (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการตรวจสอบข้อมูล:', err);
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล' });
        }

        if (results.length > 0) {
            const match = await bcrypt.compare(password, results[0].password);
            if (match) {
                req.session.user = results[0];
                res.status(200).json({ message: 'ล็อกอินสำเร็จ', user: results[0] });
            } else {
                res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
            }
        } else {
            res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
