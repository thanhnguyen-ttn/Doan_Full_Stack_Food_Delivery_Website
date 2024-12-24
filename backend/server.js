import express from "express"; // Import thư viện Express.js
import cors from "cors";       // Import thư viện CORS để xử lý Cross-Origin Resource Sharing
import { connectDB } from "./config/db.js";

// app config
const app = express();        // Tạo ứng dụng Express
const port = 4000;            // Đặt cổng server

// middleware
app.use(express.json());      // Middleware để xử lý dữ liệu JSON từ body của request
app.use(cors());             // Middleware để kích hoạt CORS

//db connection
connectDB();


app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});


