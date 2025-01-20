# Base Node.js image
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all code to the container directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port that the application runs on
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]