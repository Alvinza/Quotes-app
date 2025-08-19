# Full-Stack Quotes App

A comprehensive full-stack application built with the MERN stack, featuring a custom-built quotes API and an elegant frontend interface. Discover inspiring quotes across multiple categories with a seamless user experience.

## 🌐 Live Demo
**[View Live App](https://quotes-app-plum.vercel.app/)**

## 📖 Features

### Frontend Features
- **Three Quote Categories**: Explore carefully curated collections:
  - 💕 Love & Romance quotes
  - 😢 Sad & Emotional quotes  
  - 💪 Motivational & Inspirational quotes

- **Random Quote Generation**: Click to get random quotes within your selected category
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Clean Interface**: Minimalist design focusing on content readability
- **Smooth User Experience**: Intuitive navigation and interaction patterns

### Backend Features
- **Custom REST API**: Self-built quotes database to ensure reliability
- **Multiple Endpoints**: 
  - Get all quotes across categories
  - Get quotes by specific category
  - Get individual quotes by ID
- **Robust Error Handling**: Proper HTTP status codes and error messages
- **CORS Enabled**: Cross-origin resource sharing for frontend integration

## 🛠️ Technology Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **JavaScript ES6+** - Modern JavaScript features and functionality

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **CORS** - Cross-Origin Resource Sharing middleware

### Deployment
- **Frontend**: Vercel (optimized for React applications)
- **Backend**: Render (reliable Node.js hosting)

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js 
- npm or yarn package manager
- Git

### Backend Setup

1. Clone the repository and navigate to backend:
   ```bash
   git clone https://github.com/Alvinza/Quotes-app.git
   cd quotes-app/quotes-api
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   # Server will run on port 5000 (or PORT from environment)
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd ../quotes-app
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
https://quotes-app-hjzy.onrender.com
```

### Endpoints

#### Get All Quotes
```http
GET /api/quotes
```
Returns all quotes from all categories.

#### Get Quotes by Category
```http
GET /api/quotes/:category
```
Available categories: `motivational`, `sad`, `love`

#### Get Specific Quote
```http
GET /api/quotes/:category/:id
```
Get a specific quote by category and ID.

### Response Format
```json
{
  "id": 1,
  "author": "Author Name",
  "quote": "Quote text content"
}
```

## 🎯 How to Use

1. **Select Category**: Choose from Love, Sad, or Motivational quotes
2. **Generate Quote**: Click "Get Another" to fetch a random quote from your selected category
3. **Explore**: Switch between categories to discover different types of quotes
4. **Enjoy**: Read and share meaningful quotes that resonate with you


### Why Custom API?
- **Reliability**: Built custom backend to avoid dependency on external APIs that might get removed
- **Control**: Full control over quote content and API availability
- **Performance**: Optimized for specific use case with minimal latency
- **Scalability**: Easy to add new categories and quotes as needed

### Design Decisions
- **Minimal Styling**: Focus on content over decoration for better readability
- **Tailwind CSS**: Utility-first approach for consistent and maintainable styling
- **Component Architecture**: Modular React components for better code organization
- **RESTful API**: Standard HTTP methods and status codes for predictable behavior



## 📞 Contact

For questions, suggestions, or collaboration opportunities:
- Email: alvinzondi09@gmail.com

---

**Find inspiration in every quote! 💭✨**


