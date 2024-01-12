
const { MongoClient } = require('mongodb');

// Connection URL - replace this with your actual connection string
const url = 'mongodb://localhost:27017';

// Database Name - replace with your actual database name if different
const dbName = 'lol-sigma';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    // Get the database
    const db = client.db(dbName);

        // Define the object (document) to insert
        const userObject = {
            name: "New User",
            age: 28,
            address: "123 New Street"
          };
      
          // Get the users collection
          const usersCollection = db.collection('users');
      
          // Insert the object into the users collection
          const insertResult = await usersCollection.insertOne(userObject);
          console.log('Inserted document ID:', insertResult.insertedId);

  } finally {
    // Close the connection to the database server
    await client.close();
  }
}

run().catch(console.dir);
