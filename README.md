# Inventory Dashboard

## Overview
The Inventory Dashboard is designed to help users efficiently manage their inventory. This application allows users to track products, manage stock levels, and generate reports.

## Features
- **Product Management**: Add products to the inventory.
- **Stock Tracking**: Monitor stock levels.

## Technologies Used
- **Frontend**: Next.js
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Styling**: CSS, Tailwind CSS

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/inventory-management.git
   ```
2. Install dependencies:
   ```bash
   cd inventory-management
   yarn install
   ```
3. Setting up .env
For the clent, you need to set up the .env file in the client directory with the following variables:
```bash
PORT=8001
DATABASE_URL=your_database_url
```

For the server, you need to set up the .env file in the server directory with the following variables:
```bash
NEXT_PUBLIC_API_URL=your_api_url
```
4. Run the development server:
   ```bash
   yarn run dev
   ```
5. Access the application at `http://localhost:3000`.

## 

## License
This project is licensed under the MIT License.