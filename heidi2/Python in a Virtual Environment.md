---
created: 2025-07-26
modified: 2025-07-29
context:
  - "[[Arch Linux]]"
subject:
  - "[[Python]]"
---
# Python in a Virtual Environment
## Creating a Venv
- **Go to your project directory:** `cd my_python_project`
- **Activate the environment:** `source .venv/bin/activate`
- **Work on your project:** Run Python scripts, install packages with `pip install ...`, etc.
- **Deactivate when finished:** `deactivate`
## Best Practices
**One environment per project:** It's best practice to create a separate virtual environment for each Python project you work on.

**`requirements.txt`:** It's highly recommended to use a `requirements.txt` file to keep track of your project's dependencies.

To save installed packages: `pip freeze > requirements.txt`

To install packages from a file: `pip install -r requirements.txt`

**`.gitignore`:** If you're using Git, add `.venv/` to your `.gitignore` file to prevent committing your virtual environment to your repository.
