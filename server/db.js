
const db = require('./db')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'yosmeily',
  host: 'localhost',
  database: 'favlinks',
  password: '152007',
  PORT: 5432,})


  const getLinks = async () => {
    try {
      // make a request to our server to get the links
      const response = await fetch('/api/links')
      // convert the response to json
      const data = await response.json()
      /* 
        here you can do something with the data 
      */
    } catch (error) {
      console.error(error)
    }}

    // Function to create a new link on the server
const createLink = async (newLink) => {
    try {
      const response = await fetch(`/api/links`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLink),
      });
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
  };
  
  // Function to update a link on the server
  const updateLink = async (linkId, updatedLink) => {
    try {
      const response = await fetch(`/api/links/${linkId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLink),
      });
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
  };
  
  // Function to delete a link on the server
  const deleteLink = async (linkId) => {
    try {
      const response = await fetch(`/api/links/${linkId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
  };

  module.exports = {
    getLinks,
    createLink,
  updateLink,
  deleteLink,
  }