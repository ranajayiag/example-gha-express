const { appEnvs } = require('./config');
const express = require('express')

const router = express.Router();

/**
 * @openapi
 * /api:
 *   get:
 *     description: List app envs
 *     responses:
 *       200:
 *         description: Returns app envs
 */
router.get('/api', (req, res) => {
  res.json({
    status: 'OK',
    appEnvs
  });
});

/**
 * @openapi
 * /api:
 *   post:
 *     description: Test POST
 *     responses:
 *       200:
 *         description: Returns the passed payload
 */
router.post('/api', (req, res) => {
  res.json({ ...req.body });
});

module.exports = { router };
