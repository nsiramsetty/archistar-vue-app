// API Services Index
// Centralized location for all external service integrations

import axios from 'axios';

// Configure axios defaults
const apiClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  config => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      console.warn('Authentication error');
    }
    return Promise.reject(error);
  }
);

// Service classes
class ProjectService {
  static async getProjects(filters = {}) {
    // For now, return local data, but this could fetch from API
    const testBlob = require('../_data/testBlob.json');
    return testBlob.features;
  }

  static async getProjectById(id) {
    const projects = await this.getProjects();
    return projects.find(project => project.properties.id === id);
  }
}

class MapService {
  static getMapboxToken() {
    return process.env.VUE_APP_MAPBOX_TOKEN || 'pk.eyJ1IjoibnNpcmFtc2V0dHkiLCJhIjoiY2sxeXF2ZmZjMHE5ZDNubXQwOWNiOXUxaCJ9.JrWqpd_aK4Ej-xFTygFohg';
  }

  static getDefaultMapStyle() {
    return 'mapbox://styles/mapbox/streets-v11';
  }
}

class FilterService {
  static getUniqueValues(projects, field) {
    return [...new Set(projects.map(project => project.properties.project[field]))];
  }

  static getValueRange(projects, field) {
    const values = projects.map(project => parseFloat(project.properties.project[field]));
    return {
      min: Math.min(...values),
      max: Math.max(...values)
    };
  }
}

// Export services
export {
  apiClient,
  ProjectService,
  MapService,
  FilterService
};

// Default export for convenience
export default {
  ProjectService,
  MapService,
  FilterService
};