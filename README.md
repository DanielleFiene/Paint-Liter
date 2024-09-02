# Paint-Liter

# Wall Paint Calculator

This project includes a wall paint calculator implemented in both Python and JavaScript. The calculator allows users to input the dimensions of up to four walls and calculates the amount of paint needed based on the selected paint type. The JavaScript version is enhanced with a user-friendly UI built with HTML and CSS.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Python Version](#python-version)
- [JavaScript Version](#javascript-version)
- [How to Run](#how-to-run)
- [Learning Outcomes](#learning-outcomes)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Input Wall Dimensions**: Users can add or remove walls by specifying their width and height.
- **Paint Calculation**: The program calculates the amount of paint required for different paint types (wall paint or primer).
- **Reset Functionality**: Easily reset the wall list to start over.
- **User-Friendly Interface** (JavaScript Version): The JavaScript version includes a simple and intuitive web interface.

## Project Structure

- **Python Version**:
  - Command-line interface.
  - No external dependencies.

- **JavaScript Version**:
  - Interactive UI built with HTML and CSS.
  - JavaScript logic for dynamic interactions and paint calculation.

```
Wall-Paint-Calculator/
│
├── python_version/
│   ├── wall_paint_calculator.py
│   └── README.md
│
├── js_version/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
└── README.md
```

## Python Version

### How It Works

1. **Add Wall**: Add up to four walls by entering their width and height.
2. **Remove Wall**: Remove the last wall added.
3. **Calculate Paint**: Select a paint type (wall paint or primer) and calculate the amount of paint needed.
4. **Reset Walls**: Reset to only the first wall.
5. **Exit Program**: End the program.

### Running the Python Script

1. Clone the repository.
2. Navigate to the `python_version` directory.
3. Run the script:

   ```bash
   python wall_paint_calculator.py
   ```

4. Follow the on-screen prompts to interact with the program.

### Example Usage

```bash
Enter width of wall 1 (m): 3.5
Enter height of wall 1 (m): 2.8

Options:
1. Add another wall
2. Remove last wall
3. Calculate paint needed
4. Reset
5. Exit
Choose an option: 1

Enter width of wall 2 (m): 4.2
Enter height of wall 2 (m): 2.8
Wall 2 added.

Choose an option: 3
Choose paint type (wall/primer): wall
Number of liters of wall-paint needed: 2.57
```

## JavaScript Version

### UI Overview

The JavaScript version includes a web interface that allows users to interact with the calculator through form inputs and buttons. The UI dynamically updates based on user input.

### Running the JavaScript Version

1. Clone the repository.
2. Navigate to the `js_version` directory.
3. Open `index.html` in your web browser.

### Features

- **Responsive Design**: The UI is responsive and adapts to different screen sizes.
- **Dynamic Updates**: Wall information and paint calculations update in real-time as users interact with the interface.
- **User Feedback**: Informative prompts guide the user through each step.

### Example UI

![Wall Paint Calculator UI](screenshot.png)

## Learning Outcomes

- **Python**:
  - List manipulation and iteration.
  - Basic input/output operations.
  - Function-based design.

- **JavaScript**:
  - DOM manipulation.
  - Event handling in JavaScript.
  - Basic web design using HTML and CSS.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue with any improvements, suggestions, or new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The JS file with HTML and CSS:
https://daniellefiene.github.io/Paint-Liter/

![paint per m2](https://github.com/user-attachments/assets/b29f32f2-b969-43a4-bcf5-7addab79dc93)
