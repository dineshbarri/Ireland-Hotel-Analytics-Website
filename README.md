# 🏨 Ireland Hotels Analytics Dashboard 

<div align="center">
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ECharts](https://img.shields.io/badge/Apache_ECharts-AA344D?style=for-the-badge&logo=apache&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)

</div>

## 📊 Project Overview

The Ireland Hotel Analytics Dashboard is a comprehensive data visualization tool that tracks and analyzes hotel pricing across Ireland using real-time data scraped from Booking.com. The dashboard specifically focuses on weekend one-night stays, providing users with clear insights into price distribution patterns across different Irish counties.

This dashboard helps:

* Travelers compare hotel prices across regions.
* Hoteliers benchmark pricing.
* Researchers analyze accommodation trends.

---

## 📸 Website Preview


<div align="center">
 
 ![Hotels Dashboard Screenshot](assets/website-preview.gif)
  <p>
    <a href="https://ireland-hotels-dineshbarri.netlify.app/" target="_blank">
      🚀 Live Demo
    </a>
  </p>
  
</div>

---

### ✨ Key Features

- **📈 Interactive Analytics** - Price vs quality scatter plots, performance matrices, and distribution charts
- **🗺️ Interactive Map** - Leaflet-powered map with hotel locations and pricing tiers
- **🔍 Advanced Filtering** - Multi-dimensional filtering by city, price, reviews, and policies
- **📊 Hotel Comparison** - Side-by-side comparison of up to 3 hotels
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🎨 Premium Design** - Luxury hotel-inspired visual design system
- **⚡ Real-time Updates** - Instant dashboard updates with smooth animations


---


## 📁 **Repository Structure**
```text
Ireland-Hotels-UI-Project/
├── index.html # Main dashboard UI
├── style.css # Application styling
├── main.js # App logic, data, charts, map
├── package.json # Minimal metadata
├── data
     ├──  hotels.csv #  Irish Hotels Dataset 
├── design.md # Design system, colors, components
├── implementation.md # Architecture notes + DAX samples
├── interaction.md # UX patterns & interactions
├── outline.md # Project plan & functional breakdown
│
└── resources/ # Images and static assets
    ├── hero-bg.jpg
    ├── hotel-1.jpg
    ├── hotel-2.jpg
    ├── hotel-3.jpg
    ├── website-preview.gif # Website Preview 
    └── hotel-4.jpg
```


---

## 📈 Dataset Overview

The dataset comprises **447 hotels** across Ireland with detailed metrics:

### 📌 Data Source

The dataset is obtained by scraping **Booking.com** search results for *one-night weekend stays* across Ireland.

### 📌 Data Disclaimer

* Data scraping respects publicly visible data only.
* Booking.com® terms of service must be reviewed before any reuse.
* This project is for **educational and analytical purposes only**.

### 📌 Data Provenance

Each row includes:

* Hotel name
* County
* Price per night
* Rating
* Review count ...


### 🏙️ Geographic Distribution
- **15+ Cities** including Dublin, Galway, Cork, Killarney, and more
- **Nationwide Coverage** from urban centers to coastal destinations

### 💰 Pricing Analysis
- **Price Range**: €99 - €4,020 per night
- **Average Price**: €277
- **Budget Options**: 100+ hotels under €200
- **Luxury Tier**: Premium properties above €400

### ⭐ Quality Metrics
- **Score Range**: 5.9 - 9.7/10
- **Review Distribution**: 50 - 23,489 reviews per property
- **Rating Categories**: Good, Very Good, Excellent, Wonderful, Exceptional

### 🛌 Room & Policy Data
- **Room Types**: Standard, Deluxe, Executive, Family, Suite variants
- **Cancellation**: 60% offer free cancellation
- **Prepayment**: Mixed policies across properties
- **Breakfast**: 35% include breakfast

---

### 🧰 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: ECharts.js, Leaflet.js
- **Animation**: Anime.js, Typed.js
- **Design**: Tailwind CSS, Custom CSS

---

## ⚙️ Installation & Setup

Follow the steps below to run the project locally:

```bash
git clone https://github.com/dineshbarri/Ireland-Hotel-Analytics-Website.git
cd Ireland-Hotel-Analytics-Website
```

Then simply open:

```
index.html
```

In your browser.

> No backend or server required — **pure HTML/CSS/JS project**.


---

## 📊 Key Analytics Features

### 1. Price vs Quality Analysis
- **Scatter plot** comparing hotel prices against review scores
- **Bubble sizing** based on review volume
- **Color coding** by quality tiers
- **Interactive tooltips** with hotel details

### 2. Performance Matrix
- **Quadrant analysis** positioning hotels by price and quality
- Identification of **value leaders** and **premium properties**
- **Market segmentation** insights

### 3. Geographic Intelligence
- **Interactive map** with hotel locations
- **Marker sizing** by review volume
- **Color coding** by price categories
- **Clickable popups** with key metrics

### 4. Advanced Filtering
- **City Selection** with search functionality
- **Price Range** slider with real-time updates
- **Review Score** filtering (5-10 scale)
- **Room Type** multi-select
- **Policy Filters** (cancellation, prepayment, breakfast)

  
---





---





## 👨‍💻 Creator

### Dinesh Barri

#### 📬 Contact Information

- **📧 Email**: [dineshbarri1997@gmail.com](mailto:dineshbarri1997@gmail.com)
- **💼 LinkedIn**: [dinesh-barri](https://www.linkedin.com/in/dinesh-barri)
- **🐙 GitHub**: [dineshbarri](https://github.com/dineshbarri)

---

## 🤝 Contributing

We welcome contributions! Please read our

* [Contributing Guidelines](CONTRIBUTING.md)

* [Code of Conduct](CODE_OF_CONDUCT.md)

---

# 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---


## 💼 Business Use Cases

This dashboard can be used by:

### 🏨 Hoteliers

* Benchmark pricing vs competitors.
* Identify peak demand regions.

### 📈 Investors

* Compare price trends across counties.
* Identify profitable regions for new hotels.

### 🧳 Travelers

* Discover affordable weekend destinations.
* Compare county-level price ranges instantly.


---

## 🙏 Acknowledgments

This project was made possible thanks to:

- **Data Source**: Booking.com (used for educational purposes)
- **Visualization**: 
  - [Apache ECharts](https://echarts.apache.org/)
  - [Leaflet](https://leafletjs.com/)
- **Animation**:
  - [Anime.js](https://animejs.com/)
  - [Splide.js](https://splidejs.com/)
- **Netlify hosting**

---

### ⭐ If you like this project, don't forget to give it a star!

---

<div align="center">

**Built with ❤️ using modern web technologies**

</div>

