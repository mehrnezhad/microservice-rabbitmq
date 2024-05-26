/**
 * tags:
 *  name: User
 *  description: user description
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      AddUser:
 *          type: object
 *          required:
 *              -   name
 *              -   email
 *              -   password
 *          properties:
 *              name:
 *                  type: string
 *              email:
 *                  type: string
 *              password: 
 *                  type: string
 * 
 *      LoginUser:
 *          type: object
 *          required:
 *              -   email
 *              -   password
 *          properties:
 *              email:
 *                  type: string
 *              password: 
 *                  type: string
 *          
 */
/**
 * @swagger
 *  /register:
 *   post:
 *      tags:
 *          -   User
 *      summary: register user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/AddUser"
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/AddUser"
 *      responses:
 *          200:
 *              description: success
 * 
 */
/**
 * @swagger
 *  /login:
 *   post:
 *      tags:
 *          -   User
 *      summary: login user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/LoginUser"
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/LoginUser"
 *      responses:
 *          200:
 *              description: success
 * 
 */