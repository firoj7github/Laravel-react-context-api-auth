# 🚀 Laravel + React Project Setup

এই প্রজেক্টে **Laravel 10** এবং **React 18** ব্যবহার করা হয়েছে। নিচের ধাপগুলো অনুসরণ করে সহজে লোকাল মেশিনে রান করতে পারবেন।  

---

## ✅ Prerequisites
- PHP 8.2 বা তার উপরে
- Composer
- Node.js (LTS) & npm

---

## ⚡ Installation & Setup

প্রথমে Laravel প্রজেক্ট তৈরি করুন এবং React সহ Breeze ইনস্টল করুন।  

```bash
# Laravel Installer ইনস্টল (যদি আগে না করা থাকে)
composer global require laravel/installer

# নতুন Laravel প্রজেক্ট তৈরি করুন
laravel new laravel-react-context-api-auth

# প্রজেক্ট ফোল্ডারে যান
cd laravel-react-context-api-auth

# Laravel Breeze ইনস্টল করুন
composer require laravel/breeze --dev
php artisan breeze:install react

# React এবং প্রয়োজনীয় প্যাকেজ ইনস্টল করুন
npm install react react-dom react-router-dom
npm install @vitejs/plugin-react

# বাকি ডিপেন্ডেন্সি ইনস্টল করুন
npm install

```

# বাকি ডিপেন্ডেন্সি ইনস্টল করুন