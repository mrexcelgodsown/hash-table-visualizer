# Hash Table Visualizer

A world-class, interactive web application to visualize a custom hash table with chaining for collision resolution. Built with Tailwind CSS for a modern, responsive design and JavaScript for hash table logic.

## Features
- **Interactive Hash Table**: Insert, delete, and search key-value pairs with chaining visualization.
- **Animated Visualization**: Highlights operations in buckets with smooth animations.
- **Responsive Design**: Sleek UI with dark/light theme toggle, gradients, and hover effects.
- **Real-Time Feedback**: Info panel shows operation results (e.g., "Key found", "Key deleted").
- **Clean Code**: Modular JavaScript with a well-structured HashTable class.

## Demo
Try it live at [https://your-username.github.io/hash-table-visualizer](https://your-username.github.io/hash-table-visualizer).

![Demo GIF](assets/demo.gif)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hash-table-visualizer.git
   ```
2. Open `index.html` in a modern browser (no server required).

## Usage
1. Enter a key and value, then click "Insert" to add to the hash table.
2. Use "Search" to find a key or "Delete" to remove it, with animated highlights.
3. Click "Clear Table" to reset or "Toggle Theme" for dark/light mode.
4. Watch buckets and chained nodes update in real-time.

## Tech Stack
- **Frontend**: HTML, JavaScript
- **Styling**: Tailwind CSS (responsive, modern design)
- **Fonts**: Inter (via Tailwind)

## Algorithm Complexity
- Insert: O(1) average, O(n) worst case (many collisions)
- Search: O(1) average, O(n) worst case
- Delete: O(1) average, O(n) worst case
- Hash Function: Simple string hashing with modulo

## Future Enhancements
- Implement open addressing (e.g., linear probing).
- Add load factor and dynamic resizing.
- Support export/import of key-value pairs.

## License
MIT License