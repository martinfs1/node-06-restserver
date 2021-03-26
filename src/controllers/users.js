const express = require('express');
const { v4: uuidv4 } = require("uuid"); 

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = (req, res) => {
    const users = [
        {
          id: uuidv4(),
          name: "Laureano",
        },
        {
          id: uuidv4(),
          name: "Nacho",
        },
      ];
      
      //para probar _errorHandler     
      // throw new Error('pasaron cosas')     

      res.json(users);
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = (req, res) => {
    const user = req.body;
    user.id = uuidv4();
    const result = {
      message: "User created",
      user,
    };
    res.status(201).json(result);
  };
 
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req, res) => {
  
    const { id } = req.params;
    const user = req.body;
    user.id = id;
  
    const result = {
      message: "User updated",
      user
    };
    res.status(201).json(result);
  };
 
  /**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
 const updatePartialUser = (req, res) => {
  
    const { id } = req.params;
    const user = req.body;
    user.id = id;
  
    const result = {
      message: "User updated with patch ",
      user,
    };
    res.json(result);
  };
  
  /**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
  const deleteUser = (req, res) => {
    const { id } = req.params;
    // const id = req.params.id
    const result = {
      message: `User with id: ${id} deleted `,
    };
    res.json(result);
  };

  module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
  }