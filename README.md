# Snapshots from the Website


<img width="1782" height="554" alt="Screenshot 2025-07-17 181557" src="https://github.com/user-attachments/assets/8fbdaa84-ef1d-47b4-b599-2ff9c04eb4bf" />
<img width="1787" height="572" alt="Screenshot 2025-07-17 181612" src="https://github.com/user-attachments/assets/6349ae1b-370e-4436-b05b-057ab0351a77" />
<img width="1771" height="810" alt="Screenshot 2025-07-17 181701" src="https://github.com/user-attachments/assets/f5900d4d-a7a0-4436-830c-4d26ea6c50af" />
<img width="1779" height="707" alt="Screenshot 2025-07-17 181730" src="https://github.com/user-attachments/assets/263b2396-5ef1-4ea2-ad77-4d90d8653994" />
<img width="1779" height="707" alt="Screenshot 2025-07-17 181730" src="https://github.com/user-attachments/assets/61168e5b-8c05-45d9-baea-802a1d5ed3e6" />
<img width="1771" height="804" alt="285540213-20a909ff-8907-4ad0-be32-85c065d3c798" src="https://github.com/user-attachments/assets/0522417d-ec12-4a13-b015-410dd1acc4b6" />
<img width="1771" height="804" alt="285540129-f7c6a6ab-ccf3-4d5f-9903-26ae9bdf3b02" src="https://github.com/user-attachments/assets/65536b7e-2671-47ca-9f67-442eb00a56df" />

🚀 Building a Realty-Estate website using the MERN stack involves creating a full-stack application with MongoDB, Express.js, React.js, and Node.js. Here's a breakdown of the key features you can implement:

User Authentication:
Allow users to register and log in. Ensure that certain features, like adding listings or favoriting properties, are accessible only to authenticated users.

## CRUD Operatrions
Create:
Implement a form to allow users to add new property listings. This form should include details like property name, address, description, price, type (sale or rent), number of bedrooms, bathrooms, etc.

Read:
Display property listings on the homepage or on a dedicated listings page. Each listing should show key information and a link to view more details.

Update
Allow users to edit their own property listings. Include validation to ensure data consistency.

Delete
Provide an option for users to delete their listings.

Search and Filters:
Implement a search bar to allow users to search for properties based on keywords like location, type, or price range. Include filters for refining search results, such as filtering by property type, number of bedrooms, bathrooms, etc.

Image Upload:
Allow users to upload images for their property listings. Display these images in a gallery or carousel on the listing details page.

User Dashboard
Provide a user dashboard where users can manage their property listings, view favorites, and edit their profile.

Responsive Design
This website is responsive, making it accessible and user-friendly across various devices, including desktops, tablets, and mobile phones.

Error Handling and Validation
Implement thorough error handling and validation on the server and client sides to ensure data integrity and a smooth user experience.

Pagination
If you have a large number of listings, implement pagination to improve page load times and the user experience.

API End Points! 🚀🔗
Here's a list of the API endpoints:

User Routes
Sign-Up: /api/user/signup (POST)

Sign-In: /api/user/signin (POST)

Google Sign-In: /api/user/google (POST)

Sign-Out: /api/user/signout (GET)

Get User: /api/user/:id (GET)

Update User: /api/user/update/:id (POST)

Delete User: /api/user/delete/:id (DELETE)

Get User Listings: /api/user/listings/:id (GET)

Listing Routes
Create Listings: /api/listing/create (POST)

Update Listings: /api/listing/update/:id (POST)

Delete Listings: /api/listing/delete/:id (DELETE)

Get Single Listing: /api/listing/get/:id (GET)

Get Listings: /api/listing/get (GET)

Feel free to include any additional details or explanations as needed for your project.
