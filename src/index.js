import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем 'client' для нового API React 18
import { App } from "./App";
import "./App.css"; // Импорт стилей, если они нужны

// Создаем корневой элемент с использованием createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // Используем новый метод render
