import admin from './admin.js';
import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import cors from 'cors';

const corsHandler = cors({ origin: true });

export const fetchTires = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    try {
      const { tireSize } = req.query;

      if (!tireSize) {
        functions.logger.error('Tire size parameter missing', { query: req.query });
        return res.status(400).json({ success: false, error: 'Tire size parameter is required' });
      }

      const encodedTireSize = tireSize.replace(/\//g, '%2F');
      const url = `https://api.wheel-size.com/v2/tires/search/advanced/?t=${encodedTireSize}&r=usdm&user_key=3ee807b5af97fd58bf363faef19cb7fd`;

      functions.logger.info('Fetching tire data', { url, tireSize });

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const tireData = await response.json();

      functions.logger.info('Tire data fetched successfully', { tireSize, dataLength: tireData.length });
      res.status(200).json({ success: true, data: tireData });
    } catch (error) {
      functions.logger.error('Error fetching tire data', { error: error.message, query: req.query });
      res.status(500).json({ success: false, error: 'An error occurred while fetching tire data', details: error.message });
    }
  });
});