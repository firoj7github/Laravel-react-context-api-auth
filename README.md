# 🚀 Laravel + React Project Setup

এই প্রজেক্টে **Laravel 12** এবং **React 19** ব্যবহার করা হয়েছে। নিচের ধাপগুলো অনুসরণ করে সহজে লোকাল মেশিনে রান করতে পারবেন।  

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

# প্রজেক্ট রান করুন
composer run dev

```

## Short Description (Point to Point)

কোথায় কোথায় কি setup করতে হবে
---

### Vite Configuration (vite.config.js)
- @vitejs/plugin-react দিয়ে React JSX support যোগ করা হয়।
- use this code

### React Entry Point (resources/js/app.jsx)
- createRoot দিয়ে React root element তৈরি করা হয়।
- BrowserRouter দিয়ে routing enable করা হয়।
- Main App component render করা হয়।
- use this code copy paste with same file name

### Main App Component (resources/js/components/App.jsx)
- Page routing setup করে Routes এবং Route ব্যবহার করে।
- use this code copy paste with same file name

### Welcome Blade পরিবর্তন (resources/views/welcome.blade.php)
- use this code copy paste with same file name

### Add catch-all route for React ( web.php )
- /{any} → সব URL route catch করবে।
```bash
Route::get('/{any}', function () {
    return view('welcome'); // React root view
})->where('any', '.*');
```