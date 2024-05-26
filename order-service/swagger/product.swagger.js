/**
 * tags:
 *  name: Product
 *  description: Product description
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      AddProduct:
 *          type: object
 *          required:
 *              -   title
 *              -   description
 *              -   price
 *          properties:
 *              title:
 *                  type: string
 *              description:
 *                  type: string
 *              price: 
 *                  type: number
 * 
 */
/**
 * @swagger
 *  /create:
 *   post:
 *      tags:
 *          -   Product
 *      summary: create product
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/AddProduct"
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/AddProduct"
 *      responses:
 *          200:
 *              description: success
 * 
 */