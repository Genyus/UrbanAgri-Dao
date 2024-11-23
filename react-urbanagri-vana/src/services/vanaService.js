// src/services/vanaService.js

import axios from 'axios';

// Replace with your actual Vana API endpoint and key
const VANA_API_ENDPOINT = 'https://api.vana.com/v1';
const VANA_API_KEY = 'your-api-key-here';

const vanaService = {
  // Fetch geographic data
  fetchGeographicData: async (location) => {
    try {
      const response = await axios.get(`${VANA_API_ENDPOINT}/geographic`, {
        params: { location },
        headers: { 'Authorization': `Bearer ${VANA_API_KEY}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching geographic data:', error);
      throw error;
    }
  },

  // Fetch demographic data
  fetchDemographicData: async (location) => {
    try {
      const response = await axios.get(`${VANA_API_ENDPOINT}/demographic`, {
        params: { location },
        headers: { 'Authorization': `Bearer ${VANA_API_KEY}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching demographic data:', error);
      throw error;
    }
  },

  // Fetch agricultural data
  fetchAgriculturalData: async (location) => {
    try {
      const response = await axios.get(`${VANA_API_ENDPOINT}/agricultural`, {
        params: { location },
        headers: { 'Authorization': `Bearer ${VANA_API_KEY}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching agricultural data:', error);
      throw error;
    }
  },

  // Fetch all data types
  fetchAllData: async (location) => {
    try {
      const [geographic, demographic, agricultural] = await Promise.all([
        this.fetchGeographicData(location),
        this.fetchDemographicData(location),
        this.fetchAgriculturalData(location)
      ]);

      return { geographic, demographic, agricultural };
    } catch (error) {
      console.error('Error fetching all data:', error);
      throw error;
    }
  }
};

export default vanaService;
