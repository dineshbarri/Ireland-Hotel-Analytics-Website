// Hotel Booking Dashboard - Main JavaScript File

// Global variables
let hotelData = [];
let filteredData = [];
let map = null;
let charts = {};

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    initializeContactModal();
});

function initializeContactModal() {
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const backdrop = document.getElementById('contact-backdrop');
    
    // Open modal
    contactBtn.addEventListener('click', function() {
        contactModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Animate modal in
        anime({
            targets: '#contact-modal > div:last-child > div',
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutQuart'
        });
    });
    
    // Close modal function
    function closeModal() {
        anime({
            targets: '#contact-modal > div:last-child > div',
            scale: [1, 0.9],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: function() {
                contactModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close modal on button click
    closeModalBtn.addEventListener('click', closeModal);
    
    // Close modal on backdrop click
    backdrop.addEventListener('click', closeModal);
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

async function initializeDashboard() {
    try {
        // Show loading state
        showLoadingState();
        
        // Load hotel data
        await loadHotelData();
        
        // Initialize components
        initializeParticleBackground();
        initializeAnimations();
        initializeFilters();
        initializeCharts();
        initializeMap();
        initializeGallery();
        initializeComparison();
        
        // Setup scroll reveal
        setupScrollReveal();
        
        // Hide loading state
        hideLoadingState();
        
        // Initialize typed text effects
        initializeTypedText();
        
    } catch (error) {
        console.error('Error initializing dashboard:', error);
        showErrorState();
    }
}

// Sample hotel data (in real implementation, this would come from an API)
function generateSampleData() {
    const cities = [
        'Dublin City Centre, Dublin', 'Galway', 'Cork', 'Saint Stephen\'s Green, Dublin',
        'Temple Bar, Dublin', 'Ballsbridge, Dublin', 'Killarney', 'Parnell Square, Dublin',
        'Letterkenny', 'Sligo', 'Waterford', 'Limerick', 'Athlone', 'Naas', 'Laragh'
    ];
    
    const roomTypes = [
        'Standard Room', 'Deluxe Room', 'Executive Suite', 'Family Room',
        'Twin Room', 'Double Room', 'King Room', 'Queen Room'
    ];
    
    const reviewRates = ['Good', 'Very Good', 'Excellent', 'Wonderful', 'Exceptional'];
    
    const hotels = [];
    
    for (let i = 0; i < 447; i++) {
        const hotel = {
            id: i,
            name: `Hotel ${String.fromCharCode(65 + (i % 26))}${Math.floor(i / 26) + 1}`,
            city: cities[Math.floor(Math.random() * cities.length)],
            score: (5.9 + Math.random() * 3.8).toFixed(1),
            review_rate: reviewRates[Math.floor(Math.random() * reviewRates.length)],
            reviews: Math.floor(Math.random() * 5000) + 50,
            room_type: roomTypes[Math.floor(Math.random() * roomTypes.length)],
            price: Math.floor(Math.random() * 400) + 100,
            rooms_left: Math.floor(Math.random() * 8),
            free_cancellation: Math.random() > 0.4,
            no_prepayment_needed: Math.random() > 0.6,
            breakfast_included: Math.random() > 0.65,
            location_rate: (Math.random() * 2 + 8).toFixed(1),
            lat: 53.3498 + (Math.random() - 0.5) * 2,
            lng: -6.2603 + (Math.random() - 0.5) * 2
        };
        hotels.push(hotel);
    }
    
    return hotels;
}

async function loadHotelData() {
    // In a real implementation, this would fetch from an API
    hotelData = generateSampleData();
    filteredData = [...hotelData];
}

function initializeParticleBackground() {
    new p5(function(p) {
        let particles = [];
        
        p.setup = function() {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particle-bg');
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    opacity: p.random(0.1, 0.3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(44, 95, 93, particle.opacity * 255);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

function initializeAnimations() {
    // Animate metrics on load
    anime({
        targets: '.metric-card',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutQuart'
    });
    
    // Animate chart containers
    anime({
        targets: '.chart-container',
        scale: [0.95, 1],
        opacity: [0, 1],
        delay: anime.stagger(200, {start: 500}),
        duration: 600,
        easing: 'easeOutQuart'
    });
}

function initializeTypedText() {
    // Hero title typing effect
    new Typed('#hero-title', {
        strings: ['Hotel Booking', 'Revenue Optimization', 'Competitive Intelligence'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
    
    // Hero description typing effect
    new Typed('#hero-description', {
        strings: [
            'Transform your hotel booking strategy with advanced analytics and data-driven insights.',
            'Maximize revenue and guest satisfaction with competitive intelligence.',
            'Make informed decisions with comprehensive market analysis and forecasting.'
        ],
        typeSpeed: 30,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
        showCursor: false
    });
}

function initializeFilters() {
    // Populate city filter
    const cityFilter = document.getElementById('city-filter');
    const cities = [...new Set(hotelData.map(h => h.city))].sort();
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
    
    // Populate room type filters
    const roomTypeFilters = document.getElementById('room-type-filters');
    const roomTypes = [...new Set(hotelData.map(h => h.room_type))].sort();
    roomTypes.forEach(roomType => {
        const label = document.createElement('label');
        label.className = 'flex items-center';
        label.innerHTML = `
            <input type="checkbox" value="${roomType}" class="room-type-filter rounded border-gray-300 text-teal-600 focus:ring-teal-500">
            <span class="ml-2 text-sm">${roomType}</span>
        `;
        roomTypeFilters.appendChild(label);
    });
    
    // Score filter buttons
    document.querySelectorAll('.score-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('bg-teal-500');
            this.classList.toggle('text-white');
            this.classList.toggle('border-teal-500');
        });
    });
    
    // Filter toggle for mobile
    document.getElementById('filter-toggle').addEventListener('click', function() {
        document.getElementById('filter-panel').classList.toggle('open');
    });
    
    // Apply filters
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
}

function applyFilters() {
    const city = document.getElementById('city-filter').value;
    const priceMin = parseInt(document.getElementById('price-min').value) || 0;
    const priceMax = parseInt(document.getElementById('price-max').value) || Infinity;
    const selectedScores = Array.from(document.querySelectorAll('.score-filter.bg-teal-500')).map(btn => parseInt(btn.dataset.score));
    const selectedRoomTypes = Array.from(document.querySelectorAll('.room-type-filter:checked')).map(cb => cb.value);
    const freeCancellation = document.getElementById('free-cancellation').checked;
    const noPrepayment = document.getElementById('no-prepayment').checked;
    const breakfastIncluded = document.getElementById('breakfast-included').checked;
    
    filteredData = hotelData.filter(hotel => {
        if (city && hotel.city !== city) return false;
        if (hotel.price < priceMin || hotel.price > priceMax) return false;
        if (selectedScores.length > 0 && !selectedScores.some(score => parseFloat(hotel.score) >= score)) return false;
        if (selectedRoomTypes.length > 0 && !selectedRoomTypes.includes(hotel.room_type)) return false;
        if (freeCancellation && !hotel.free_cancellation) return false;
        if (noPrepayment && !hotel.no_prepayment_needed) return false;
        if (breakfastIncluded && !hotel.breakfast_included) return false;
        return true;
    });
    
    updateCharts();
    updateMetrics();
    updateMap();
    
    // Close mobile filter panel
    document.getElementById('filter-panel').classList.remove('open');
}

function clearFilters() {
    document.getElementById('city-filter').value = '';
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';
    document.querySelectorAll('.score-filter').forEach(btn => {
        btn.classList.remove('bg-teal-500', 'text-white', 'border-teal-500');
    });
    document.querySelectorAll('.room-type-filter').forEach(cb => cb.checked = false);
    document.getElementById('free-cancellation').checked = false;
    document.getElementById('no-prepayment').checked = false;
    document.getElementById('breakfast-included').checked = false;
    
    filteredData = [...hotelData];
    updateCharts();
    updateMetrics();
    updateMap();
}

function initializeCharts() {
    // Price vs Quality Scatter Plot
    const priceQualityChart = echarts.init(document.getElementById('price-quality-chart'));
    charts.priceQuality = priceQualityChart;
    
    // Hotel Performance Matrix
    const performanceMatrix = echarts.init(document.getElementById('performance-matrix'));
    charts.performance = performanceMatrix;
    
    // Review Distribution
    const reviewChart = echarts.init(document.getElementById('review-chart'));
    charts.review = reviewChart;
    
    // Price Distribution
    const priceChart = echarts.init(document.getElementById('price-chart'));
    charts.price = priceChart;
    
    updateCharts();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        Object.values(charts).forEach(chart => chart.resize());
    });
}

function updateCharts() {
    updatePriceQualityChart();
    updatePerformanceMatrix();
    updateReviewChart();
    updatePriceChart();
}

function updatePriceQualityChart() {
    const data = filteredData.map(hotel => [
        hotel.price,
        parseFloat(hotel.score),
        hotel.reviews,
        hotel.name
    ]);
    
    const option = {
        title: {
            text: 'Price vs Review Score',
            left: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#2C5F5D'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `<strong>${params.data[3]}</strong><br/>
                        Price: €${params.data[0]}<br/>
                        Score: ${params.data[1]}<br/>
                        Reviews: ${params.data[2]}`;
            }
        },
        xAxis: {
            type: 'value',
            name: 'Price (€)',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                formatter: '€{value}'
            }
        },
        yAxis: {
            type: 'value',
            name: 'Review Score',
            nameLocation: 'middle',
            nameGap: 40,
            min: 5.5,
            max: 10
        },
        series: [{
            type: 'scatter',
            data: data,
            symbolSize: function(data) {
                return Math.sqrt(data[2]) / 10 + 5;
            },
            itemStyle: {
                color: function(params) {
                    const score = params.data[1];
                    if (score >= 9) return '#D4AF37';
                    if (score >= 8) return '#2C5F5D';
                    return '#9CAF88';
                },
                opacity: 0.7
            },
            emphasis: {
                itemStyle: {
                    opacity: 1,
                    borderColor: '#2C5F5D',
                    borderWidth: 2
                }
            }
        }],
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%',
            top: '15%'
        }
    };
    
    charts.priceQuality.setOption(option);
}

function updatePerformanceMatrix() {
    const data = filteredData.map(hotel => ({
        name: hotel.name,
        price: hotel.price,
        score: parseFloat(hotel.score),
        reviews: hotel.reviews,
        city: hotel.city
    }));
    
    // Calculate percentiles for quadrant positioning
    const prices = data.map(d => d.price).sort((a, b) => a - b);
    const scores = data.map(d => d.score).sort((a, b) => a - b);
    const priceMedian = prices[Math.floor(prices.length / 2)];
    const scoreMedian = scores[Math.floor(scores.length / 2)];
    
    const option = {
        title: {
            text: 'Hotel Performance Matrix',
            left: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#2C5F5D'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const data = params.data;
                return `<strong>${data.name}</strong><br/>
                        Price: €${data.value[0]}<br/>
                        Score: ${data.value[1]}<br/>
                        Reviews: ${data.value[2]}<br/>
                        City: ${data.city}`;
            }
        },
        xAxis: {
            type: 'value',
            name: 'Price (€)',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                formatter: '€{value}'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'Review Score',
            nameLocation: 'middle',
            nameGap: 40,
            min: 5.5,
            max: 10,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [{
            type: 'scatter',
            data: data.map(d => ({
                name: d.name,
                value: [d.price, d.score, d.reviews],
                city: d.city
            })),
            symbolSize: function(data) {
                return Math.sqrt(data[2]) / 8 + 8;
            },
            itemStyle: {
                color: function(params) {
                    const price = params.data.value[0];
                    const score = params.data.value[1];
                    
                    // Quadrant colors
                    if (price >= priceMedian && score >= scoreMedian) return '#D4AF37'; // Premium
                    if (price < priceMedian && score >= scoreMedian) return '#2C5F5D'; // Value
                    if (price < priceMedian && score < scoreMedian) return '#9CAF88'; // Budget
                    return '#FF6B6B'; // Underperformers
                },
                opacity: 0.8
            },
            emphasis: {
                itemStyle: {
                    opacity: 1,
                    borderColor: '#2C5F5D',
                    borderWidth: 2
                }
            }
        }],
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%',
            top: '15%'
        }
    };
    
    charts.performance.setOption(option);
}

function updateReviewChart() {
    const reviewCounts = {};
    filteredData.forEach(hotel => {
        const rate = hotel.review_rate;
        reviewCounts[rate] = (reviewCounts[rate] || 0) + 1;
    });
    
    const data = Object.entries(reviewCounts).map(([rate, count]) => ({
        name: rate,
        value: count
    }));
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
            name: 'Review Distribution',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            data: data,
            itemStyle: {
                color: function(params) {
                    const colors = ['#2C5F5D', '#D4AF37', '#9CAF88', '#4A90E2', '#FF6B6B'];
                    return colors[params.dataIndex % colors.length];
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    
    charts.review.setOption(option);
}

function updatePriceChart() {
    const prices = filteredData.map(hotel => hotel.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const binSize = 50;
    const bins = Math.ceil((maxPrice - minPrice) / binSize);
    
    const histogram = new Array(bins).fill(0);
    prices.forEach(price => {
        const binIndex = Math.floor((price - minPrice) / binSize);
        if (binIndex < bins) {
            histogram[binIndex]++;
        }
    });
    
    const xAxisData = histogram.map((_, index) => 
        `€${minPrice + index * binSize}-${minPrice + (index + 1) * binSize}`
    );
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
                rotate: 45
            }
        },
        yAxis: {
            type: 'value',
            name: 'Number of Hotels'
        },
        series: [{
            data: histogram,
            type: 'bar',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#2C5F5D' },
                    { offset: 1, color: '#9CAF88' }
                ])
            },
            emphasis: {
                itemStyle: {
                    color: '#D4AF37'
                }
            }
        }]
    };
    
    charts.price.setOption(option);
}

function initializeMap() {
    // Initialize Leaflet map centered on Ireland
    map = L.map('map').setView([53.3498, -6.2603], 7);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    updateMap();
}

function updateMap() {
    if (!map) return;
    
    // Clear existing markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    
    // Add hotel markers
    filteredData.forEach(hotel => {
        const color = getPriceColor(hotel.price);
        const marker = L.circleMarker([hotel.lat, hotel.lng], {
            radius: Math.sqrt(hotel.reviews) / 20 + 5,
            fillColor: color,
            color: '#2C5F5D',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.6
        }).addTo(map);
        
        const popupContent = `
            <div class="p-3">
                <h3 class="font-bold text-lg mb-2">${hotel.name}</h3>
                <p class="text-sm text-gray-600 mb-2">${hotel.city}</p>
                <div class="space-y-1">
                    <div><strong>Price:</strong> €${hotel.price}</div>
                    <div><strong>Score:</strong> ${hotel.score}/10</div>
                    <div><strong>Reviews:</strong> ${hotel.reviews}</div>
                    <div><strong>Available:</strong> ${hotel.rooms_left} rooms</div>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        marker.on('mouseover', function() {
            this.setStyle({
                weight: 3,
                opacity: 1,
                fillOpacity: 0.8
            });
        });
        
        marker.on('mouseout', function() {
            this.setStyle({
                weight: 2,
                opacity: 0.8,
                fillOpacity: 0.6
            });
        });
    });
}

function getPriceColor(price) {
    if (price < 200) return '#9CAF88'; // Budget - Sage Green
    if (price < 350) return '#2C5F5D'; // Mid-range - Teal
    return '#D4AF37'; // Luxury - Gold
}

function initializeGallery() {
    const splide = new Splide('#hotel-gallery', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 4000,
        breakpoints: {
            768: {
                perPage: 1
            },
            1024: {
                perPage: 2
            }
        }
    });
    
    splide.mount();
}

function initializeComparison() {
    // Populate comparison dropdowns
    const selects = ['compare-hotel-1', 'compare-hotel-2', 'compare-hotel-3'];
    
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        hotelData.forEach(hotel => {
            const option = document.createElement('option');
            option.value = hotel.id;
            option.textContent = `${hotel.name} - ${hotel.city}`;
            select.appendChild(option);
        });
    });
    
    // Comparison button handler
    document.getElementById('compare-button').addEventListener('click', function() {
        const hotelIds = [
            document.getElementById('compare-hotel-1').value,
            document.getElementById('compare-hotel-2').value,
            document.getElementById('compare-hotel-3').value
        ].filter(id => id !== '');
        
        if (hotelIds.length < 2) {
            alert('Please select at least 2 hotels to compare');
            return;
        }
        
        compareHotels(hotelIds);
    });
}

function compareHotels(hotelIds) {
    const hotels = hotelIds.map(id => hotelData.find(h => h.id == id)).filter(Boolean);
    
    if (hotels.length === 0) return;
    
    // Update headers
    hotels.forEach((hotel, index) => {
        document.getElementById(`hotel-${index + 1}-header`).textContent = hotel.name;
    });
    
    // Clear remaining headers
    for (let i = hotels.length; i < 3; i++) {
        document.getElementById(`hotel-${i + 1}-header`).textContent = '';
    }
    
    // Create comparison table
    const metrics = [
        { key: 'city', label: 'City' },
        { key: 'price', label: 'Price (€)', format: v => `€${v}` },
        { key: 'score', label: 'Review Score', format: v => `${v}/10` },
        { key: 'reviews', label: 'Total Reviews' },
        { key: 'rooms_left', label: 'Rooms Available' },
        { key: 'room_type', label: 'Room Type' },
        { key: 'free_cancellation', label: 'Free Cancellation', format: v => v ? 'Yes' : 'No' },
        { key: 'no_prepayment_needed', label: 'No Prepayment', format: v => v ? 'Yes' : 'No' },
        { key: 'breakfast_included', label: 'Breakfast Included', format: v => v ? 'Yes' : 'No' }
    ];
    
    const tbody = document.getElementById('comparison-table-body');
    tbody.innerHTML = '';
    
    metrics.forEach(metric => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';
        
        let rowHTML = `<td class="border border-gray-300 px-4 py-3 font-semibold">${metric.label}</td>`;
        
        for (let i = 0; i < 3; i++) {
            if (i < hotels.length) {
                const value = hotels[i][metric.key];
                const formattedValue = metric.format ? metric.format(value) : value;
                rowHTML += `<td class="border border-gray-300 px-4 py-3 text-center">${formattedValue}</td>`;
            } else {
                rowHTML += `<td class="border border-gray-300 px-4 py-3 text-center">-</td>`;
            }
        }
        
        row.innerHTML = rowHTML;
        tbody.appendChild(row);
    });
    
    // Show results
    document.getElementById('comparison-results').classList.remove('hidden');
    
    // Animate table appearance
    anime({
        targets: '#comparison-results',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuart'
    });
}

function updateMetrics() {
    const totalHotels = filteredData.length;
    const avgPrice = Math.round(filteredData.reduce((sum, h) => sum + h.price, 0) / totalHotels);
    const avgScore = (filteredData.reduce((sum, h) => sum + parseFloat(h.score), 0) / totalHotels).toFixed(1);
    const totalRooms = filteredData.reduce((sum, h) => sum + h.rooms_left, 0);
    
    // Animate counter updates
    animateCounter('total-hotels', totalHotels);
    animateCounter('avg-price', `€${avgPrice}`);
    animateCounter('avg-score', avgScore);
    animateCounter('total-rooms', totalRooms);
}

function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const currentValue = element.textContent;
    
    // For simple numbers
    if (!isNaN(targetValue)) {
        anime({
            targets: { value: parseInt(currentValue) || 0 },
            value: targetValue,
            duration: 1000,
            easing: 'easeOutQuart',
            update: function(anim) {
                element.textContent = Math.round(anim.animatables[0].target.value);
            }
        });
    } else {
        // For formatted values
        element.textContent = targetValue;
        anime({
            targets: element,
            scale: [0.8, 1],
            duration: 500,
            easing: 'easeOutQuart'
        });
    }
}

function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showLoadingState() {
    document.body.classList.add('loading');
}

function hideLoadingState() {
    document.body.classList.remove('loading');
}

function showErrorState() {
    // Show error message to user
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50';
    errorDiv.textContent = 'Error loading dashboard. Please refresh the page.';
    document.body.appendChild(errorDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize for responsive charts
window.addEventListener('resize', debounce(() => {
    Object.values(charts).forEach(chart => {
        if (chart && chart.resize) {
            chart.resize();
        }
    });
    
    if (map) {
        map.invalidateSize();
    }
}, 250));

// Export functions for potential external use
window.HotelDashboard = {
    scrollToSection,
    applyFilters,
    clearFilters,
    compareHotels
};
