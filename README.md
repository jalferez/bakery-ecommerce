# Treetop Bakery — Local Mockup Bakery eCommerce Website  
**Status:** _Early Development — Actively Being Worked On_  

---

## Description  
Treetop Bakery is a **local Mockup bakery eCommerce website** built to combine the warmth of a neighborhood bakery with the convenience of modern online ordering.  
The goal is to allow customers to **browse, order, and pay online** for pickup or local delivery — all through a clean, fast, and user-friendly interface. THIS IS NOT A REAL BAKERY!

This project follows a **JAMstack architecture** using static site generation, a headless CMS, and integrated eCommerce.

---

## ⚙️ Tech Stack

| Category | Tool / Technology | Purpose |
|-----------|------------------|----------|
| **Static Site Generator** | [Eleventy (11ty)](https://www.11ty.dev/) | Core framework for building the site |
| **Hosting / Deployment** | [Netlify](https://www.netlify.com/) | Continuous deployment, domain, SSL, and serverless functions |
| **CMS** | [Decap CMS](https://decapcms.org/) | Headless CMS for managing bakery content directly from the admin panel |
| **Authentication** | **Netlify Identity + Git Gateway** | Secure login and Git-based content commits for CMS users |
| **E-Commerce** | [Snipcart](https://snipcart.com/) | Shopping cart + checkout integration for online ordering and payments |
| **Styling** | Vanilla CSS | Custom handcrafted responsive design |
| **Version Control** | [GitHub](https://github.com/) | Source code management and collaboration |

---

## 🎯 Current Progress

### ✅ Setup & Configuration  
- Configured Eleventy (11ty) build and directory structure  
- Integrated Netlify Identity and Git Gateway authentication  
- Added Decap CMS admin panel for managing content  
- Connected Snipcart for cart and checkout functionality  

### ✅ Frontend Implementation  
- Built responsive **navbar** and **footer**  
- Designed homepage with dynamic **hero**, **services overview**, and **welcome section**  
- Integrated a **cinematic looping video** for the welcome section  
- Implemented mobile-first, fully responsive layout with smooth transitions between breakpoints  

### ✅ Content Management  
- Set up CMS collections for featured items, homepage hero images, and bakery services  
- Implemented filters and collections in Eleventy to dynamically load content  

---

## 🚧 Upcoming Features

- [ ] **Menu Page** — categorized product listing with “Add to Cart” buttons  
- [ ] **Cart & Checkout Flow** — powered by Snipcart for both delivery and pickup options  
- [ ] **CMS Enhancements** — adding dynamic pricing and stock control via Decap CMS  
- [ ] **Responsive Animations** — subtle scroll and hover effects for added polish  
- [ ] **SEO Optimization** — meta tags, sitemap, and performance tuning  

---

---

## 🚀 Deployment
- Automatically **built and deployed via Netlify** on every push to the `main` branch  
- `videos`, `images`, and `admin` folders are copied through **Eleventy passthrough**  
- CMS edits are committed directly to GitHub through **Git Gateway**  

---

## 💡 Future Vision
Treetop Bakery will become a **fully functional local eCommerce platform** for bakeries — simple to use, maintain, and scale.  

Customers will be able to:  
- Browse a beautifully presented menu  
- Add items to their cart  
- Pay online securely  
- Choose pickup or local delivery  
- Receive automated order confirmations  

The project emphasizes **design quality**, **performance**, and **maintainability**, powered by a modern JAMstack workflow.

---

## Author  
**John Alferez**  
Developer & Designer passionate about accessible and affordable web experiences.  
📍 Based in Houston, TX  

---

## License  
This project is currently under development and not yet licensed for public distribution.  
For inquiries, contact the author directly.

---

## Acknowledgements  
- [Eleventy](https://www.11ty.dev/)  
- [Netlify](https://www.netlify.com/)  
- [Decap CMS](https://decapcms.org/)  
- [Snipcart](https://snipcart.com/)  

