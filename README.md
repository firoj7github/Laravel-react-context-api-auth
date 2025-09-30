# Laravel + React Project Setup

এই প্রজেক্টে Laravel 10 এবং React 18 ব্যবহার করা হয়েছে। নিচের ধাপগুলো অনুসরণ করে লোকাল মেশিনে রান করতে পারবেন।

---

## Prerequisites
- PHP 8.2 or higher
- Node.js & npm

## 🚀 Installation Steps

### 1️⃣ Laravel Install করুন
```bash
composer global require laravel/installer
laravel new laravel-react-contect-api-auth

2️⃣ Laravel Breeze Install করুন
```bash
composer require laravel/breeze --dev
php artisan breeze:install blade

3️⃣ React এবং Vite Plugin Install করুন
```bash
npm install react react-dom react-router-dom
npm install @vitejs/plugin-react
npm install

4️⃣ অন্যান্য Dependencies Install করুন
```bash
composer run dev

