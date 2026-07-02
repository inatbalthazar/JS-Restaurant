# Gen D — Premium Dining

> โครงการนี้เป็นส่วนหนึ่งของการเรียนรู้ในหลักสูตร **Generation Thailand**

เว็บไซต์ร้านอาหารระดับพรีเมียมที่แสดงเมนูอาหาร พร้อมระบบจองโต๊ะและสั่งอาหารล่วงหน้า ข้อมูลทั้งหมดดึงจากไฟล์ JavaScript และแสดงผลผ่าน DOM

---

## Features

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Menu Catalog** | แสดงเมนูอาหารพร้อมรูปภาพ คำอธิบาย ราคา และข้อมูลโภชนาการ |
| **Cuisine Filter** | กรองเมนูตามประเภทอาหาร (Italian, American, Japanese, Mexican, Thai) |
| **Table Reservation** | ฟอร์มจองโต๊ะพร้อมระบุวันที่ เวลา และจำนวนแขก |
| **Pre-Order** | เลือกจำนวนอาหารล่วงหน้า พร้อมคำนวณยอดรวมอัตโนมัติ |
| **Confirmation Modal** | แสดง ref ID หลังจากจองสำเร็จ |
| **Persistent Storage** | ข้อมูลการจองถูกบันทึกใน `localStorage` |
| **Scroll Animation** | การ์ดเมนูค่อยๆ ปรากฏเมื่อเลื่อนลงมา (IntersectionObserver) |
| **Responsive Design** | รองรับทุกขนาดหน้าจอ (Desktop, Tablet, Mobile) |

---

## How It Works: Data from JS Files

### 1. Data Source (`my-array.js` / `my-object.js`)

ข้อมูลทั้งหมดถูกเก็บในไฟล์ JavaScript ในรูปแบบ **array of objects**:

**`my-array.js`** — ข้อมูลรายชื่ออาหารแบบ array อย่างง่าย:
```js
let food = ["pizza", "burger", "pasta", "sushi", "tacos", "pad thai", "ramen", "steak"];
```

**`my-object.js`** — ข้อมูล structured พร้อมรายละเอียดครบถ้วน:
```js
let foodDatabase = [
    {
        id: 1,
        name: "pizza",
        cuisine: "Italian",
        origin: "Italy",
        price: 18.99,
        description: "Wood-fired perfection...",
        image: "https://images.unsplash.com/...",
        vegetarian: false
    }
    // ... และรายการอื่นๆ
];
```

นอกจากนี้ยังมีตัวแปรเสริมสำหรับตกแต่งหน้าเว็บ:
```js
const heroBackground = 'https://images.unsplash.com/...';
const fallbackGradients = { Italian: '...', American: '...', Japanese: '...', Mexican: '...', Thai: '...' };
```

### 2. Linking in HTML (`index.html`)

เรียงลำดับ `<script>` tag เพื่อให้ `app.js` สามารถเข้าถึงข้อมูลจากไฟล์ JS ที่โหลดก่อนหน้า:

```html
<script src="my-array.js"></script>
<script src="my-object.js"></script>
<script src="app.js"></script>
```

### 3. Rendering & Logic (`app.js`)

`app.js` จะอ่านข้อมูลจากตัวแปร global ที่ประกาศใน `my-object.js` จากนั้นสร้าง DOM elements แบบไดนามิก:

```js
foodDatabase.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <span>$${item.price.toFixed(2)}</span>
        <p>${item.description}</p>
    `;
    grid.appendChild(card);
});
```

รวมถึง CSS ทั้งหมดก็ inject ผ่าน JavaScript เช่นกัน — ทำให้ `index.html` มีขนาดเล็กและสะอาด

---

## File Structure

```
first-meet-git/
├── index.html        # โครงสร้าง HTML (71 บรรทัด)
├── my-array.js       # ข้อมูล food array
├── my-object.js      # ข้อมูล structured (foodDatabase, gradients, hero)
├── app.js            # CSS inject + logic ทั้งหมด (render, filter, reservation, animation)
├── PRD.md            # Product Requirements Document
└── README.md         # เอกสารนี้
```

---

## How to Run

เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์โดยตรง หรือใช้ local server:

```bash
# Python
python -m http.server 8000

# หรือ Node.js
npx serve .
```

---

## Tech Stack

- **HTML5** — โครงสร้างหน้าเว็บ
- **CSS3** — ตกแต่งผ่าน JavaScript injection (Flexbox, Grid, Animations, Media Queries)
- **JavaScript (Vanilla)** — ข้อมูล การจัดการ DOM, LocalStorage, IntersectionObserver
- **Google Fonts** — *Playfair Display* + *Inter*
- **Unsplash** — รูปภาพอาหาร
