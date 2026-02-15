# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose the port Vite runs on (default is 5173)
EXPOSE 5173

# Start the app with the --host flag to expose it outside the container
CMD ["npm", "run", "dev", "--", "--host"]