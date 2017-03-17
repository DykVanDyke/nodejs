module.exports = function(app){

/*
app.get('/tickets',function(req, res){
    console.log('requested all tickets');
    //res.status(200).json({ ticketId: 'All tickets' });
    res.json({ ticketId: 'All tickets' });
});
*/

/**
 * @swagger
 * definition:
 *   Ticket:
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
 * /tickets:
 *   get:
 *     tags:
 *       - Cenas e tal
 *     description: Returns all tickets
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of tickets
 *         schema:
 *           $ref: '#/definitions/Ticket'
 */

// Usage of the question mark enables optional character to the Id parameter.
app.get('/tickets/:id?/:coiso?',function(req, res){
    var ticketId = req.params.id;
    var secondParameter = req.params.coiso;
    console.log('params:', req.params);

    // check URL GET parameters
    if (!ticketId){
      console.log('requested all tickets.');
      //res.status(200).json({ ticketId: 'All tickets' });
      res.json({ ticketId: 'All tickets' });
    }else{
      console.log('requested ticket: ',ticketId);
      console.log('Further params:', secondParameter);
      res.status(200).json({ ticketId: ticketId });
    }
});


};
