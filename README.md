
# Trip Architect

[🔗 Live Demo](https://trip-architect-lime.vercel.app/) • [📁 GitHub Repository](https://github.com/Souhardya05/Trip-Architect.git)

Trip Architect is a web-based travel planning app designed to visualize travel paths and solve navigation problems using graph algorithms. The application utilizes Dijkstra's algorithm to determine the least-time path between two randomly selected cities.

## Features
- **Graph Visualization**: Displays the travel network with nodes representing cities and edges representing possible routes.
- **Problem Generation**: Randomly generates a new travel problem with source and destination cities.
- **Path Solving**: Computes and displays the shortest path based on travel time between the selected cities.
- **User Interface**: Simple and intuitive interface powered by Bootstrap and Vis.js.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Libraries/Frameworks**:
  - [Bootstrap](https://getbootstrap.com/) for responsive design
  - [Vis.js](https://visjs.org/) for network visualization
  - [FontAwesome](https://fontawesome.com/) for icons

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd trip-architect
   ```
3. Open the `index.html` file in your web browser.

## Usage
1. Click the **"Get New Problem"** button to generate a new travel problem.
2. The problem statement will display the source and destination cities.
3. Click the **"Solve Problem"** button to view the shortest path solution.

## File Structure
- `index.html` - Main HTML structure of the web app.
- `style.css` - Styling for the application layout and components.
- `trip_architect.js` - JavaScript logic for graph creation, problem generation, and solving algorithms.

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.


## Acknowledgments
- Thanks to the open-source community for libraries like Bootstrap, Vis.js, and FontAwesome.

---
Feel free to modify and enhance the project to suit your specific needs!
