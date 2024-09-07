# YouTime Project Setup Guide

Welcome to the **YouTime** project! This guide will help you set up your development environment, install the necessary dependencies, and start the project.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Python 3.x**
- **pip** (Python package installer)

## Setting Up the Project

Follow these steps to get the YouTime project up and running:

### 1. Clone the Repository

If you haven't already, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/youtime.git
cd youtime
```
### 2. Set Up a Virtual Environment

It's recommended to use a virtual environment to manage your project's dependencies. To set up a virtual environment using venv, run the following commands:

```python3 -m venv venv```

This will create a virtual environment named venv in your project directory.

### 3. Activate the Virtual Environment

To activate the virtual environment, use the following command:
- **On Windows:**
    ``` venv\Scripts\activate ```
- **On MacOS/Linux:**
    ```source venv/bin/activate```

### 4. Install Required Packages

With the virtual environment activated, install the project's dependencies from the requirements.txt file:

```pip install -r requirements.txt```

This command will install all the required packages listed in the requirements.txt file.

### 5. Start the Project

Once the dependencies are installed, you can start the project by running the following command:

```python server.py```

This will launch the YouTime server.

## Deactivating the Virtual Environment

When you're done working on the project, you can deactivate the virtual environment by running:

```deactivate```

## Starting the Front End

Change your directory into the front end:

```cd frontend```

Start the react app:

```npm start```

## Troubleshooting

If you encounter any issues during setup, ensure that you are using the correct version of Python and that your virtual environment is activated.

Make sure all dependencies are installed correctly by checking the output of pip install -r requirements.txt.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
