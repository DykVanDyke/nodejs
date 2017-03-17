var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definition:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Cenas e tal
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/users', function(req, res){
    res.json({ ticketId: 'All tickets' });
});

router.get('/users/:id', function(req, res){
    res.json({ ticketId: req.params.id });
});

module.exports = router;
