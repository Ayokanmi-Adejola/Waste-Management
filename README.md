# Clean Nigeria Pickup Now

A modern waste management platform connecting Nigerians with local waste collectors for a cleaner environment.

## Project Overview

Clean Nigeria Pickup Now is a web application designed to address Nigeria's waste management challenges by:

- Connecting residents with verified waste collectors in their area
- Providing an easy-to-use scheduling system for waste pickups
- Offering an interactive map to locate nearby waste management services
- Educating communities about proper waste disposal and recycling practices

## Features

- **Schedule Pickup**: Easily schedule waste collection services
- **Find Nearby Collectors**: Interactive map showing waste collectors near your location
- **Nigerian-focused**: Designed specifically for Nigerian communities with local context
- **Mobile Responsive**: Works seamlessly on all devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/clean-nigeria-pickup-now.git
   ```

2. Navigate to the project directory
   ```sh
   cd clean-nigeria-pickup-now
   ```

3. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Project Structure

```
clean-nigeria-pickup-now/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions and hooks
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
└── README.md           # Project documentation
```

## Technologies Used

This project is built with:

- **Vite**: For fast development and optimized production builds
- **TypeScript**: For type-safe code and better developer experience
- **React**: For building the user interface components
- **shadcn-ui**: For beautiful, accessible UI components
- **Tailwind CSS**: For responsive and customizable styling
- **React Router**: For client-side routing
- **Leaflet**: For interactive maps integration

## Deployment

The application can be deployed using various platforms:

### Vercel Deployment

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Configure your project settings
4. Deploy with a single click

### Netlify Deployment

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy your site

### GitHub Pages

1. Update the `vite.config.ts` file to include your base path
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## Future Enhancements

- **Payment Integration**: Add support for digital payments
- **Waste Tracking**: Real-time tracking of waste collection status
- **Recycling Rewards**: Incentive program for proper waste segregation
- **Community Forums**: Platform for discussing local waste management initiatives
- **Expanded Map Coverage**: Include more rural areas across Nigeria

## Contributing

Contributions to improve Clean Nigeria Pickup Now are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
# Waste-Management
