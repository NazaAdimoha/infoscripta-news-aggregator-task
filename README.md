# News Aggregator

A responsive and feature-rich news aggregator website built with React.js and TypeScript. This project aggregates news articles from multiple sources, offering users the ability to search, filter, and personalize their news feed. The application is containerized with Docker for easy deployment.

## Table of Contents

* [Features](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#features)
* [Technologies](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#technologies)
* [Getting Started](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#getting-started)
  * [Prerequisites](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#prerequisites)
  * [Installation](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#installation)
* [Configuration](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#configuration)
* [Usage](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#usage)
* [Project Structure](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#project-structure)
* [Docker Setup](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#docker-setup)
  * [Building and Running with Docker](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#building-and-running-with-docker)
  * [Using Docker Compose](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#using-docker-compose)
* [Best Practices](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#best-practices)
* [Contributing](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#contributing)
* [License](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#license)
* [Acknowledgements](https://chatgpt.com/c/67b79b62-6fec-8005-b206-8e4be899a058#acknowledgements)

## Features

* **Article Search & Filtering:**
  * Search for articles by keyword.
  * Filter articles by publication date, category (e.g., Technology, Business, Sports, Entertainment), and source.
* **Personalized News Feed:**
  * Customize the news feed by selecting preferred sources, categories, and authors.
  * Save user preferences for a tailored browsing experience.
* **Mobile-Responsive Design:**
  * Optimized for seamless viewing on desktops, tablets, and mobile devices.
* **Multiple Data Sources:**
  * Integrates with at least three external news APIs such as NewsAPI, The Guardian API, and BBC News API (or other selections from the provided list).
* **Containerization:**
  * The entire frontend application is containerized using Docker for consistent deployment and scalability.
* **Clean and Modular Code:**
  * Follows best practices including DRY (Don’t Repeat Yourself), KISS (Keep It Simple, Stupid), and SOLID principles.

## Technologies

* **Frontend Framework:** React.js with TypeScript
* **Styling:** Tailwind CSS (or your preferred CSS framework)
* **State Management:** Zustand
* **HTTP Client:** Axios or Fetch API for API integration
* **Build Tool:** Vite
* **Containerization:** Docker
* **Linting & Formatting:** ESLint, Prettier

## Getting Started

### Prerequisites

* **Node.js:** Version 14 or later
* **npm/yarn:** Package manager of your choice
* **Docker:** For containerizing the application

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   ```

   **Navigate to the Project Directory:**

   cd news-aggregator

 **
   **Install Dependencies:**
		npm install**

## Configuration

This project requires API keys for fetching news articles from external sources. Create a `.env` file in the root directory and add your API keys:

REACT_APP_NEWS_API_KEY=your_newsapi_key_here
REACT_APP_GUARDIAN_API_KEY=your_guardian_api_key_here
REACT_APP_BBC_API_KEY=your_bbc_api_key_here

## Usage

### Running in Development Mode

Start the development server with hot reloading:
npm run dev

Access the application at [http://localhost:3000]().

### Building for Production

To create a production build of the application:

npm run build


## Docker Setup

### Building and Running with Docker

1. **Build the Docker Image:
   docker build -t news-aggregator .

   **
2. **Run the Docker Container: docker run -p 3000:3000 news-aggregator**

### Using Docker Compose (Optional)

For easier management of the Docker environment, you can use Docker Compose. Create a `docker-compose.yml` file in the root directory with the following content:
version: '3'
services:
  news-aggregator:
    build: .
    ports:
      - '3000:3000'
    environment:
      - REACT_APP_NEWS_API_KEY=your_newsapi_key_here
      - REACT_APP_GUARDIAN_API_KEY=your_guardian_api_key_here
      - REACT_APP_BBC_API_KEY=your_bbc_api_key_here

Run the application with: docker-compose up



## Best Practices

* **DRY (Don’t Repeat Yourself):** Write reusable components and functions to avoid duplication.
* **KISS (Keep It Simple, Stupid):** Ensure code remains simple and readable.
* **SOLID Principles:** Write maintainable and scalable code by following SOLID design patterns.
* **Modular Design:** Utilize atomic design principles for a well-organized component hierarchy.
* **Environment Variables:** Securely manage API keys and configuration settings via environment variables.
* **Error Handling:** Implement comprehensive error handling, especially for API calls.
* **Responsive Testing:** Regularly test on multiple devices and viewports to ensure a consistent user experience.
* **Code Quality:** Use ESLint and Prettier to maintain a consistent code style and catch potential issues early.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository.**
2. **Commit Your Changes: git commit -m "feat: description"**
3. **Push to Your Branch: git push origin feature/your-feature**


## Acknowledgements

* **News Data Providers:**
  * [NewsAPI](https://newsapi.org/)
  * [The Guardian API](https://open-platform.theguardian.com/)
  * [BBC News API]()
* **Tools and Libraries:**
  * React.js, TypeScript, Vite, Tailwind CSS, Zustand, MantineUI, Docker, ESLint, Prettier
* **Community:**
  * Open-source contributors and communities for their continuous support and inspiration
