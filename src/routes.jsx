// routes.js
import React from 'react';
import { createRoute } from '@tanstack/react-router';

// Define a simple route that renders an input form
const rootRoute = createRoute({
  path: '/',
  component: () => (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Cura Pet Web</h1>
      <input type="text" placeholder="Enter your pet's name" />
      <br />
      <input type="email" placeholder="Enter your email" />
    </div>
  ),
});

export const routeTree = rootRoute;
