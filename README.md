# 🛒 Order Management System

This is a simple order management system. It simulates an ordering system for a pizza outlet with role-based access and basic inventory management.

---

## 📋 Features

- 🔐 Login system with two user levels:
  - **Shop Owner**
  - **Customer**
- 🍕 Order items with various types (e.g., Pepperoni Pizza, Cheesy Onion Pizza).
- 🧂 Each item has its own list of ingredients.
- 📦 Ingredient stock tracking.
- 📑 Customers can:
  - Place orders containing one or more items.
  - View order status using a unique reference ID.
- 🚫 Orders cannot be placed if ingredients are out of stock.
- 🔄 Order statuses: `Placed` → `Preparing` → `Dispatched` → `Delivered`
- 🧑‍💼 Shop Owner can:
  - Update order statuses.
  - Update inventory levels.
  - Add/Remove inventory items.
  - Add/Remove order item types.
  - View all orders.

---

## 🧪 Tech Stack

- **Frontend**: ReactJS / Tailwind CSS
