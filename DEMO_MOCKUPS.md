# BookPG - Demo Mockups & UI Showcase

## Client Presentation Materials

**Project:** BookPG - PG Accommodation Booking Platform
**Client:** [Client Name]
**Date:** October 11, 2025
**Prepared By:** Recnos Inc

---

## Table of Contents

1. [Home Page](#1-home-page)
2. [PG Listing Page](#2-pg-listing-page)
3. [PG Details Page](#3-pg-details-page)
4. [Booking Page](#4-booking-page)
5. [User Dashboard](#5-user-dashboard)
6. [Admin Dashboard](#6-admin-dashboard)
7. [Login & Registration](#7-login--registration)
8. [Mobile Views](#8-mobile-views)
9. [Search & Filter Features](#9-search--filter-features)
10. [User Flow Diagrams](#10-user-flow-diagrams)

---

## 1. HOME PAGE

### Desktop View (1920x1080)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                    🏠 Home  📋 Browse  👤 Login/Register     [NAVBAR]    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│                  ╔══════════════════════════════════════════════╗                │
│                  ║     🏠 India's #1 PG Booking Platform       ║                │
│                  ╚══════════════════════════════════════════════╝                │
│                                                                                   │
│                        Find Your Perfect PG Accommodation                        │
│                   Discover comfortable, safe, and affordable                     │
│                     paying guest accommodations in prime locations               │
│                                                                                   │
│    ┌────────────────────────────────────────────────────────────────────┐       │
│    │ 🔍 Search by PG name, location, amenities, or description...      │       │
│    └────────────────────────────────────────────────────────────────────┘       │
│                                                                                   │
│    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│    │ City/Location│  │ Min Price (₹)│  │ Max Price (₹)│                       │
│    └──────────────┘  └──────────────┘  └──────────────┘                       │
│                                                                                   │
│              ┌────────────────────────────────────────┐                         │
│              │        🔍 SEARCH PGs                   │                         │
│              └────────────────────────────────────────┘                         │
│                                                                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                     EXPLORE PGs IN TOP CITIES                                    │
│                                                                                   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│  │   🏙️    │  │   🌆    │  │   🏛️    │  │   💎    │  │   🏖️    │  │   🎓    ││
│  │Bangalore│  │ Mumbai  │  │  Delhi  │  │Hyderabad│  │ Chennai │  │  Pune   ││
│  │ 250+ PGs│  │ 180+ PGs│  │ 200+ PGs│  │ 150+ PGs│  │ 120+ PGs│  │ 140+ PGs││
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘│
│                                                                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                        WHY CHOOSE BOOKPG?                                        │
│                                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                │
│  │    📍           │  │    💰           │  │    ⭐           │                │
│  │ Prime Locations │  │ Affordable      │  │ Verified        │                │
│  │                 │  │ Pricing         │  │ Listings        │                │
│  │ Find PGs close  │  │ Compare prices  │  │ All PGs verified│                │
│  │ to work/college │  │ that fit budget │  │ by community    │                │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘                │
│                                                                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                      POPULAR AMENITIES                                           │
│                                                                                   │
│        ┌────────┐     ┌────────┐     ┌────────┐                                │
│        │  📶    │     │  🚗    │     │  🍽️    │                                │
│        │  WiFi  │     │Parking │     │  Food  │                                │
│        └────────┘     └────────┘     └────────┘                                │
│                                                                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                   READY TO FIND YOUR NEW HOME?                                   │
│                                                                                   │
│                  Browse through hundreds of verified PGs                         │
│                                                                                   │
│                      [ BROWSE ALL PGs → ]                                        │
│                                                                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│  About Us | Contact | Terms | Privacy | FAQ        Built by Recnos Inc         │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- ✅ Hero section with gradient background
- ✅ Full-text search bar
- ✅ City and price filters
- ✅ Popular cities with click navigation
- ✅ Feature highlights
- ✅ CTA buttons

---

## 2. PG LISTING PAGE

### Desktop View with Search Bar

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                    🏠 Home  📋 Browse  👤 Dashboard         [NAVBAR]     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                          AVAILABLE PGs                                           │
│                                                                                   │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search by name, location, amenities, description...                      │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                   │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│ │   City       │  │ Min Price    │  │ Max Price    │  │   🔍 Search  │        │
│ └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐          │
│  │ ┌───────────────┐ │  │ ┌───────────────┐ │  │ ┌───────────────┐ │          │
│  │ │   [PG IMAGE]  │ │  │ │   [PG IMAGE]  │ │  │ │   [PG IMAGE]  │ │          │
│  │ └───────────────┘ │  │ └───────────────┘ │  │ └───────────────┘ │          │
│  │                   │  │                   │  │                   │          │
│  │ Sunshine PG       │  │ Green Valley PG   │  │ Comfort Living PG │          │
│  │ for Boys          │  │ for Girls         │  │                   │          │
│  │                   │  │                   │  │                   │          │
│  │ 📍 Bangalore, KA  │  │ 📍 Pune, MH       │  │ 📍 Hyderabad, TS  │          │
│  │ ⭐ 4.5 (24)       │  │ ⭐ 4.8 (31)       │  │ ⭐ 4.2 (18)       │          │
│  │                   │  │                   │  │                   │          │
│  │ ₹ ₹10,000/month   │  │ ₹ ₹12,000/month   │  │ ₹ ₹9,000/month    │          │
│  └───────────────────┘  └───────────────────┘  └───────────────────┘          │
│                                                                                   │
│  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐          │
│  │ ┌───────────────┐ │  │ ┌───────────────┐ │  │ ┌───────────────┐ │          │
│  │ │   [PG IMAGE]  │ │  │ │   [PG IMAGE]  │ │  │ │   [PG IMAGE]  │ │          │
│  │ └───────────────┘ │  │ └───────────────┘ │  │ └───────────────┘ │          │
│  │                   │  │                   │  │                   │          │
│  │ City Center PG    │  │ Student Nest PG   │  │ Women's Hostel    │          │
│  │                   │  │                   │  │                   │          │
│  │ 📍 Mumbai, MH     │  │ 📍 Delhi, DL      │  │ 📍 Chennai, TN    │          │
│  │ ⭐ 4.6 (45)       │  │ ⭐ 4.3 (22)       │  │ ⭐ 4.7 (38)       │          │
│  │                   │  │                   │  │                   │          │
│  │ ₹ ₹15,000/month   │  │ ₹ ₹8,500/month    │  │ ₹ ₹11,000/month   │          │
│  └───────────────────┘  └───────────────────┘  └───────────────────┘          │
│                                                                                   │
│                        [ Load More PGs ]                                         │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- ✅ Search bar with full-text search
- ✅ Multiple filter options
- ✅ Grid layout (responsive)
- ✅ PG cards with images
- ✅ Location and rating display
- ✅ Price in Indian Rupees

---

## 3. PG DETAILS PAGE

### Desktop View

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                    🏠 Home  📋 Browse  👤 Dashboard         [NAVBAR]     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐      │
│  │                                 │  │                                 │      │
│  │        [MAIN PG IMAGE]          │  │        [PG IMAGE 2]             │      │
│  │                                 │  │                                 │      │
│  └─────────────────────────────────┘  └─────────────────────────────────┘      │
│                                                                                   │
│  ┌───────────────────────────────────────────────┐  ┌─────────────────────┐    │
│  │                                               │  │                     │    │
│  │ Sunshine PG for Boys                          │  │   ₹ ₹10,000        │    │
│  │                                               │  │   /month            │    │
│  │ 📍 123 MG Road, Koramangala,                  │  │                     │    │
│  │    Bangalore, Karnataka                       │  │                     │    │
│  │                                               │  │  [ BOOK NOW ]       │    │
│  │ ⭐ 4.5 ★★★★☆ (24 reviews)                    │  │                     │    │
│  │                                               │  └─────────────────────┘    │
│  │ ──────────────────────────────────────────    │                             │
│  │                                               │                             │
│  │ DESCRIPTION                                   │                             │
│  │ Comfortable PG accommodation with all modern  │                             │
│  │ amenities. Close to IT parks and educational  │                             │
│  │ institutions. Fully furnished rooms with      │                             │
│  │ attached bathrooms.                           │                             │
│  │                                               │                             │
│  │ ──────────────────────────────────────────    │                             │
│  │                                               │                             │
│  │ AMENITIES                                     │                             │
│  │ • WiFi                • Parking               │                             │
│  │ • Food                • Laundry               │                             │
│  │ • AC                  • Security              │                             │
│  │                                               │                             │
│  │ ──────────────────────────────────────────    │                             │
│  │                                               │                             │
│  │ REVIEWS (24)                                  │                             │
│  │                                               │                             │
│  │ ┌───────────────────────────────────────┐    │                             │
│  │ │ ⭐⭐⭐⭐⭐ 5/5                           │    │                             │
│  │ │ "Excellent PG with all facilities!"   │    │                             │
│  │ │ - Rahul K. (2 months ago)             │    │                             │
│  │ └───────────────────────────────────────┘    │                             │
│  │                                               │                             │
│  │ ┌───────────────────────────────────────┐    │                             │
│  │ │ ⭐⭐⭐⭐☆ 4/5                           │    │                             │
│  │ │ "Good location, friendly staff."      │    │                             │
│  │ │ - Amit S. (1 month ago)               │    │                             │
│  │ └───────────────────────────────────────┘    │                             │
│  │                                               │                             │
│  └───────────────────────────────────────────────┘                             │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- ✅ Image gallery
- ✅ Price and location prominently displayed
- ✅ Amenities list
- ✅ Reviews section with ratings
- ✅ Sticky booking card
- ✅ Book now CTA button

---

## 4. BOOKING PAGE

### Desktop View

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                    🏠 Home  📋 Browse  👤 Dashboard         [NAVBAR]     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│                        COMPLETE YOUR BOOKING                                     │
│                                                                                   │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                                                                           │    │
│  │  Sunshine PG for Boys                                                    │    │
│  │  Bangalore, Karnataka                                                    │    │
│  │                                                                           │    │
│  │  ₹10,000/month                                                           │    │
│  │                                                                           │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                   │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                                                                           │    │
│  │  📅 Move-in Date *                                                       │    │
│  │  ┌─────────────────────────────────────┐                                │    │
│  │  │ [DD/MM/YYYY]                        │                                │    │
│  │  └─────────────────────────────────────┘                                │    │
│  │                                                                           │    │
│  │  👥 Number of Guests *                                                   │    │
│  │  ┌─────────────────────────────────────┐                                │    │
│  │  │ 1                                   │                                │    │
│  │  └─────────────────────────────────────┘                                │    │
│  │                                                                           │    │
│  │  ──────────────────────────────────────────────────────                 │    │
│  │                                                                           │    │
│  │  ☐ I know my move-out date (optional)                                   │    │
│  │     Check this if you're planning a temporary stay                      │    │
│  │                                                                           │    │
│  │  [When checked, Move-out Date field appears below]                      │    │
│  │                                                                           │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │                   [ CONFIRM BOOKING ]                           │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  │                                                                           │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                   │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- ✅ PG details summary
- ✅ Move-in date picker
- ✅ Number of guests (default: 1)
- ✅ Optional move-out date with checkbox
- ✅ Form validation
- ✅ Clear CTA button

---

## 5. USER DASHBOARD

### Desktop View

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                    🏠 Home  📋 Browse  👤 John Doe          [NAVBAR]     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│                            MY BOOKINGS                                           │
│                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────┐      │
│  │                                                      ┌───────────────┐ │      │
│  │  Sunshine PG for Boys                                │  ✓ CONFIRMED  │ │      │
│  │                                                      └───────────────┘ │      │
│  │  📍 Bangalore, Karnataka                                              │      │
│  │  📅 15-Oct-2025 - Open-ended                                          │      │
│  │  ₹ ₹10,000                                                            │      │
│  │                                                                        │      │
│  └────────────────────────────────────────────────────────────────────────┘      │
│                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────┐      │
│  │                                                      ┌───────────────┐ │      │
│  │  Green Valley PG for Girls                           │  ⏳ PENDING   │ │      │
│  │                                                      └───────────────┘ │      │
│  │  📍 Pune, Maharashtra                                                 │      │
│  │  📅 20-Oct-2025 - Open-ended                                          │      │
│  │  ₹ ₹12,000                                                            │      │
│  │                                                                        │      │
│  │  [ CANCEL BOOKING ]                                                   │      │
│  │                                                                        │      │
│  └────────────────────────────────────────────────────────────────────────┘      │
│                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────┐      │
│  │                                                      ┌───────────────┐ │      │
│  │  City Center PG                                      │  ✗ CANCELLED  │ │      │
│  │                                                      └───────────────┘ │      │
│  │  📍 Mumbai, Maharashtra                                               │      │
│  │  📅 01-Sep-2025 - 01-Oct-2025                                         │      │
│  │  ₹ ₹15,000                                                            │      │
│  │                                                                        │      │
│  └────────────────────────────────────────────────────────────────────────┘      │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- ✅ List of all user bookings
- ✅ Status badges (Confirmed, Pending, Cancelled)
- ✅ Booking details with dates
- ✅ Cancel booking option for pending
- ✅ Price display in rupees

---

## 6. ADMIN DASHBOARD

### Desktop View

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                    🏠 Home  🔧 Admin  👤 Admin User        [NAVBAR]     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                          ADMIN DASHBOARD                                         │
│                                                                                   │
│  [ Overview ]  [ Users ]  [ PGs ]  [ Bookings ]                                 │
│  ═══════════                                                                     │
│                                                                                   │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐│
│  │ 👥 Total Users │  │ 🏠 Total PGs   │  │ 📋 Bookings    │  │ 💰 Revenue     ││
│  │                │  │                │  │                │  │                ││
│  │      156       │  │       48       │  │       89       │  │  ₹4,25,000     ││
│  │                │  │                │  │                │  │                ││
│  └────────────────┘  └────────────────┘  └────────────────┘  └────────────────┘│
│                                                                                   │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                       RECENT ACTIVITY                                   │    │
│  │                                                                          │    │
│  │  • New user registered: john@example.com (2 hours ago)                 │    │
│  │  • Booking confirmed: #BK-1234 (5 hours ago)                           │    │
│  │  • New PG added: "Modern Hostel" in Delhi (1 day ago)                  │    │
│  │  • User cancelled booking: #BK-1220 (1 day ago)                        │    │
│  │                                                                          │    │
│  └──────────────────────────────────────────────────────────────────────────┘    │
│                                                                                   │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                    QUICK STATS CHART                                    │    │
│  │                                                                          │    │
│  │     Bookings ▲                                                          │    │
│  │        30 │     ╱╲                                                      │    │
│  │        20 │    ╱  ╲    ╱╲                                               │    │
│  │        10 │   ╱    ╲  ╱  ╲                                              │    │
│  │         0 └──────────────────────────────────────>                     │    │
│  │            Jan  Feb  Mar  Apr  May  Jun                                │    │
│  │                                                                          │    │
│  └──────────────────────────────────────────────────────────────────────────┘    │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Admin - Users Tab

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          ADMIN DASHBOARD                                         │
│                                                                                   │
│  [ Overview ]  [ Users ]  [ PGs ]  [ Bookings ]                                 │
│                ═════════                                                         │
│                                                                                   │
│                            ALL USERS                                             │
│                                                                                   │
│  ┌──────────────┬─────────────────────────┬──────────┬────────────┬──────────┐ │
│  │ Name         │ Email                   │ Role     │ Phone      │ Actions  │ │
│  ├──────────────┼─────────────────────────┼──────────┼────────────┼──────────┤ │
│  │ John Doe     │ john@example.com        │ USER     │ 9876543210 │ [Delete] │ │
│  │ Admin User   │ admin@bookpg.com        │ ADMIN    │ 9999999999 │    -     │ │
│  │ Jane Smith   │ jane@example.com        │ OWNER    │ 9876543211 │ [Delete] │ │
│  │ Rahul Kumar  │ rahul@example.com       │ USER     │ 9876543212 │ [Delete] │ │
│  └──────────────┴─────────────────────────┴──────────┴────────────┴──────────┘ │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Admin - PGs Tab

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          ADMIN DASHBOARD                                         │
│                                                                                   │
│  [ Overview ]  [ Users ]  [ PGs ]  [ Bookings ]                                 │
│                          ═════                                                   │
│                                                                                   │
│                     ALL PGs (48)                    [ + Add New PG ]            │
│                                                                                   │
│  ┌────────────────┬────────────┬──────────┬──────────┬──────────────┬─────────┐│
│  │ Name           │ City       │ State    │ Price    │ Amenities    │ Actions ││
│  ├────────────────┼────────────┼──────────┼──────────┼──────────────┼─────────┤│
│  │ Sunshine PG    │ Bangalore  │ KA       │ ₹10,000  │ WiFi, AC,... │ [E] [D] ││
│  │ Green Valley   │ Pune       │ MH       │ ₹12,000  │ WiFi, Food...│ [E] [D] ││
│  │ Comfort Living │ Hyderabad  │ TS       │ ₹9,000   │ WiFi, Gym,...│ [E] [D] ││
│  │ City Center PG │ Mumbai     │ MH       │ ₹15,000  │ WiFi, AC,... │ [E] [D] ││
│  └────────────────┴────────────┴──────────┴──────────┴──────────────┴─────────┘│
│                                                                                   │
│  [E] = Edit   [D] = Delete                                                       │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- ✅ Statistics overview
- ✅ User management table
- ✅ PG management with CRUD
- ✅ Booking management
- ✅ Revenue tracking
- ✅ Recent activity feed

---

## 7. LOGIN & REGISTRATION

### Login Page

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                                                           [MINIMAL NAV]  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│                                                                                   │
│                       ┌────────────────────────────────┐                         │
│                       │                                │                         │
│                       │      Welcome Back! 👋          │                         │
│                       │                                │                         │
│                       │  📧 Email Address              │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │ john@example.com         │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  🔒 Password                   │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │ ••••••••••••             │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │      LOGIN               │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  Forgot Password?              │                         │
│                       │                                │                         │
│                       │  Don't have an account?        │                         │
│                       │  Sign Up                       │                         │
│                       │                                │                         │
│                       └────────────────────────────────┘                         │
│                                                                                   │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Registration Page

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ BookPG                                                           [MINIMAL NAV]  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                   │
│                       ┌────────────────────────────────┐                         │
│                       │                                │                         │
│                       │   Create Your Account 🎉       │                         │
│                       │                                │                         │
│                       │  👤 Full Name                  │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │ John Doe                 │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  📧 Email Address              │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │ john@example.com         │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  📱 Phone Number               │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │ +91 9876543210           │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  🔒 Password                   │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │ ••••••••••••             │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  ┌──────────────────────────┐ │                         │
│                       │  │   CREATE ACCOUNT         │ │                         │
│                       │  └──────────────────────────┘ │                         │
│                       │                                │                         │
│                       │  Already have an account?      │                         │
│                       │  Login                         │                         │
│                       │                                │                         │
│                       └────────────────────────────────┘                         │
│                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. MOBILE VIEWS

### Mobile Home Page (375x667 - iPhone SE)

```
┌─────────────────────────────┐
│ ☰  BookPG           👤 Login│
├─────────────────────────────┤
│  🏠 India's #1 PG Platform  │
│                              │
│   Find Your Perfect PG       │
│      Accommodation           │
│                              │
│ ┌──────────────────────────┐│
│ │ 🔍 Search PGs...         ││
│ └──────────────────────────┘│
│                              │
│ ┌──────────────────────────┐│
│ │ City/Location            ││
│ └──────────────────────────┘│
│                              │
│ ┌─────────┐ ┌─────────────┐│
│ │Min Price│ │ Max Price   ││
│ └─────────┘ └─────────────┘│
│                              │
│ ┌──────────────────────────┐│
│ │    🔍 SEARCH PGs         ││
│ └──────────────────────────┘│
│                              │
│ EXPLORE TOP CITIES           │
│                              │
│ ┌───────┐ ┌───────┐         │
│ │  🏙️   │ │  🌆   │         │
│ │Bangalo│ │Mumbai │         │
│ │250+ PGs│ │180+ PG│         │
│ └───────┘ └───────┘         │
│                              │
│ ┌───────┐ ┌───────┐         │
│ │  🏛️   │ │  💎   │         │
│ │ Delhi │ │Hyderab│         │
│ │200+ PGs│ │150+ PG│         │
│ └───────┘ └───────┘         │
│                              │
│      [View More Cities]      │
│                              │
└─────────────────────────────┘
```

### Mobile PG Card

```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │                         │ │
│ │    [PG IMAGE]           │ │
│ │                         │ │
│ └─────────────────────────┘ │
│                              │
│ Sunshine PG for Boys         │
│                              │
│ 📍 Bangalore, Karnataka      │
│ ⭐ 4.5 (24 reviews)          │
│                              │
│ ₹10,000/month                │
│                              │
│ WiFi • AC • Food • Parking   │
│                              │
│ [ View Details → ]           │
│                              │
└─────────────────────────────┘
```

### Mobile Navigation (Bottom Bar)

```
┌─────────────────────────────┐
│                              │
│    [MAIN CONTENT]            │
│                              │
├─────────────────────────────┤
│ 🏠    🔍    📋    👤         │
│Home Search Book Profile      │
└─────────────────────────────┘
```

---

## 9. SEARCH & FILTER FEATURES

### Full-Text Search Examples

**Search Query:** "WiFi Bangalore"
```
Results (Ranked by relevance):
1. Sunshine PG for Boys - Bangalore (Score: 0.89)
   Matches: City (Bangalore), Amenities (WiFi)

2. Tech Hub PG - Bangalore (Score: 0.85)
   Matches: City (Bangalore), Description (WiFi included)

3. Modern Living PG - Bangalore (Score: 0.78)
   Matches: City (Bangalore), Amenities (WiFi)
```

**Search Query:** "comfortable affordable"
```
Results (Ranked by relevance):
1. Comfort Living PG - Hyderabad (Score: 0.92)
   Matches: Name (Comfort), Description (affordable, comfortable)

2. Budget Stay PG - Pune (Score: 0.76)
   Matches: Description (affordable, comfortable living)
```

### Filter Combinations

```
┌────────────────────────────────────────┐
│ Active Filters:                        │
├────────────────────────────────────────┤
│ Search: "WiFi"                         │
│ City: Bangalore                        │
│ Min Price: ₹8,000                      │
│ Max Price: ₹15,000                     │
├────────────────────────────────────────┤
│ [ Clear All Filters ]                  │
└────────────────────────────────────────┘

Showing 12 results
```

---

## 10. USER FLOW DIAGRAMS

### Guest User Flow

```
        START (Homepage)
             │
             ├─→ Browse PGs (No Login)
             │       │
             │       └─→ View PG Details
             │               │
             │               └─→ Try to Book → Login Required
             │
             └─→ Search PGs
                     │
                     └─→ Filter by City/Price
                             │
                             └─→ View Results
```

### Registered User Flow

```
        Login/Register
             │
             ├─→ Browse PGs
             │       │
             │       ├─→ View Details
             │       │       │
             │       │       └─→ Book PG
             │       │               │
             │       │               ├─→ Enter Move-in Date
             │       │               ├─→ Enter Guest Count
             │       │               ├─→ Optional: Move-out Date
             │       │               └─→ Confirm Booking
             │       │
             │       └─→ Leave Review (after booking)
             │
             ├─→ My Dashboard
             │       │
             │       ├─→ View My Bookings
             │       ├─→ Cancel Booking
             │       └─→ View Booking Status
             │
             └─→ Profile
                     │
                     └─→ Update Profile Info
```

### Admin User Flow

```
        Admin Login
             │
             ├─→ Dashboard (Overview)
             │       │
             │       ├─→ View Statistics
             │       └─→ View Recent Activity
             │
             ├─→ Manage Users
             │       │
             │       ├─→ View All Users
             │       └─→ Delete Users
             │
             ├─→ Manage PGs
             │       │
             │       ├─→ View All PGs
             │       ├─→ Add New PG
             │       ├─→ Edit PG
             │       └─→ Delete PG
             │
             └─→ Manage Bookings
                     │
                     ├─→ View All Bookings
                     ├─→ Update Booking Status
                     └─→ View Booking Details
```

---

## TECHNICAL FEATURES SHOWCASE

### 1. Full-Text Search

**PostgreSQL Implementation:**
- Weighted search across multiple fields
- `tsvector` with GIN index for performance
- Search ranks: A (Name), B (City/State), C (Address/Amenities), D (Description)
- `websearch_to_tsquery` for natural language queries

### 2. Indian Rupee Formatting

**Examples:**
- ₹10,000 (Ten thousand)
- ₹1,00,000 (One lakh)
- ₹10,00,000 (Ten lakhs)
- Uses `Intl.NumberFormat` with 'en-IN' locale

### 3. Authentication System

**Features:**
- JWT-based authentication
- Role-based authorization (Admin, Owner, User)
- Bcrypt password hashing (10 rounds)
- Protected routes
- Token expiration (7 days)

### 4. Responsive Design

**Breakpoints:**
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Grid layouts adapt automatically

### 5. Database Optimization

**Features:**
- Indexes on frequently queried fields
- Foreign key relationships
- Trigger-based timestamp updates
- Connection pooling
- Query optimization

---

## DEMO CREDENTIALS

### Test Accounts

```
Admin Account:
Email: admin@bookpg.com
Password: password123
Access: Full system access

Owner Account:
Email: owner@example.com
Password: password123
Access: Can manage own PGs

User Account:
Email: john@example.com
Password: password123
Access: Browse and book PGs
```

---

## DEPLOYMENT INFORMATION

### URLs

**Local Development:**
- Frontend: http://localhost:5173
- Backend: http://localhost:5001

**Network Access (Same WiFi):**
- Frontend: http://192.168.0.111:5173
- Backend: http://192.168.0.111:5001

**Production (To be deployed):**
- Frontend: https://bookpg.vercel.app (suggested)
- Backend: https://bookpg-api.render.com (suggested)

---

## PRESENTATION NOTES

### Key Selling Points

1. **Modern Tech Stack**
   - Latest React 18 with Vite
   - Clean, maintainable code
   - Industry-standard practices

2. **Advanced Search**
   - PostgreSQL full-text search
   - Intelligent ranking
   - Fast and accurate results

3. **User Experience**
   - Intuitive interface
   - Mobile-responsive design
   - Smooth animations and transitions

4. **Security**
   - JWT authentication
   - Password encryption
   - Role-based access control

5. **Scalability**
   - Optimized database queries
   - Connection pooling
   - Ready for cloud deployment

6. **Indian Market Focus**
   - Rupee formatting
   - Indian cities focus
   - Local payment support ready

### Live Demo Checklist

- [ ] Show homepage with city filters
- [ ] Demonstrate search functionality
- [ ] Browse PG listings
- [ ] View PG details
- [ ] Complete a booking
- [ ] Show user dashboard
- [ ] Demonstrate admin panel
- [ ] Show mobile responsiveness
- [ ] Highlight security features
- [ ] Discuss deployment options

---

**END OF MOCKUPS**

*Prepared by: Recnos Inc*
*Date: October 11, 2025*
*Version: 1.0*
