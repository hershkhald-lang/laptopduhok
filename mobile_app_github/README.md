# Mobile Manager — Laptop Duhok POS

ئەپلیکەیشنی **بەڕێوەبەری موبایل** (داشبۆرد · کۆگە · جەرد).

## فولدەری سەرەکی لە POS

هەموو فایلەکان لە:

`public/mobile_manager/`

```
mobile_manager/
├── index.html          ← ئەپەکە
├── manifest.json       ← PWA
├── sw.js               ← Service Worker
└── assets/brand/
    └── laptop-duhok-logo.png
```

## لینک (XAMPP)

http://localhost/pos/public/mobile_manager/

(لینکی کۆن `manager_mobile.html` خۆکار دەگوازرێتەوە.)

## GitHub Pages

ئەم فۆڵدەرە (`mobile_app_github`) هەمان ناوەڕۆکی `public/mobile_manager/` ـە.

1. Upload بۆ GitHub repo
2. Settings → Pages → branch `main`
3. `username.github.io/repo-name` → Firebase Authorized domains زیاد بکە

## POS sync

لە POS: ڕێکخستن → Firebase sync (تەنها خوێndنەوە — مەخزەن ناگۆڕێت)

EOF