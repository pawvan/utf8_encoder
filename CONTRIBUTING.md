To submit a pull request (PR) to the GitHub repository **`https://github.com/pawvan/utf8_encoder`** as a contributor, follow the detailed steps below. Make sure you follow these instructions properly to ensure a smooth contribution process:

### Step-by-Step Guide to Submit a Pull Request

#### **1. Fork the Repository**
To contribute to the repository, you first need to fork it to your GitHub account.

1. **Go to the Repository**: Visit the [utf8_encoder GitHub repository](https://github.com/pawvan/utf8_encoder).
2. **Click the "Fork" Button**: This button is located at the top-right corner of the page. When you click it, GitHub will create a copy of the repository under your own GitHub account.
3. **Wait for the Fork to Complete**: After the forking process is complete, you'll be redirected to your fork of the repository.

#### **2. Clone the Forked Repository to Your Local Machine**
After forking, you need to clone your fork to your local machine to make changes.

1. **Go to Your Forked Repository**: Visit your forked repository (it will be something like `https://github.com/pawvan/utf8_encoder`).
2. **Copy the Clone URL**: You can find the "Clone or download" button on your fork's page. Copy the URL for cloning with HTTPS or SSH (depending on how you want to set it up).
3. **Clone Using Git**: Open your terminal/command prompt and run the following command:

```bash
git clone https://github.com/YOUR_USERNAME/utf8_encoder.git
```

Make sure to replace `YOUR_USERNAME` with your actual GitHub username.

#### **3. Create a New Branch for Your Changes**
It's important to work on a separate branch rather than directly on `main` (or `master`) to keep your changes organized.

1. **Navigate to Your Repository Directory**:
   ```bash
   cd utf8_encoder
   ```
   
2. **Create a New Branch**: Name your branch something descriptive about the changes you're making, for example, `add-tests` or `fix-bug`:

   ```bash
   git checkout -b my-new-branch
   ```

3. **Ensure You're on the Right Branch**: To check that you've switched to your new branch, run:

   ```bash
   git branch
   ```

#### **4. Make Your Changes**
Now, you can start editing files, writing code, and making the necessary changes. For example, if you're adding a new feature or fixing a bug, you would:

- Edit or add code in the `src/` or `tests/` folder.
- Modify or update any necessary documentation (like in `README.md`).

#### **5. Commit Your Changes**
After you've made the necessary changes, commit them to your local repository.

1. **Check the Changes**: Before committing, check what changes you've made using:

   ```bash
   git status
   ```

2. **Stage the Changes**: Stage the changes by running:

   ```bash
   git add .
   ```

   The `.` stages all modified files, or you can specify a particular file if needed.

3. **Commit the Changes**: Add a commit message that briefly describes the changes you made:

   ```bash
   git commit -m "Added feature to support encoding multi-byte characters"
   ```

#### **6. Push Your Changes to GitHub**
Once your changes are committed, push them to your forked repository.

1. **Push to Your Fork**:

   ```bash
   git push origin my-new-branch
   ```

2. **Verify the Push**: You should see your branch pushed to your GitHub fork. Check your forked repository on GitHub to make sure the branch is visible.

#### **7. Create a Pull Request**
Now that you've pushed your changes to your forked repository, it's time to create a pull request (PR) to the original repository.

1. **Go to Your Forked Repository on GitHub**: Visit `https://github.com/pawvan/utf8_encoder`.
2. **Switch to Your Branch**: On the repository page, switch to the branch you just pushed.
3. **Click the "New Pull Request" Button**: GitHub will show a "Compare & Pull Request" button. Click it to begin creating your PR.
4. **Fill in the PR Details**:
   - **Title**: Give your pull request a descriptive title (e.g., "Add UTF-8 Encoding for Emoji Support").
   - **Description**: Add a detailed description explaining what changes you made and why. This is helpful for the project maintainers to understand your contribution.
   
5. **Choose the Right Base Branch**: Ensure that the "base" branch is the `main` (or `master`) branch of the original repository (`pawvan/utf8_encoder`), and the "compare" branch is your new branch.
   
6. **Click "Create Pull Request"**: Once you've filled in the details, click the "Create Pull Request" button.

#### **8. Address Feedback**
The repository maintainers will review your pull request. They may suggest changes or improvements. You can make changes to your branch and push them, and the pull request will automatically update.

If you need to make additional changes:

1. **Edit the Code Locally**: Make the required changes in your local codebase.
2. **Commit and Push Again**:

   ```bash
   git add .
   git commit -m "Fixed issue with multi-byte encoding"
   git push origin my-new-branch
   ```

The pull request will be automatically updated with your latest commits.

#### **9. PR Review and Merge**
Once your pull request passes the review and testing stages, the project maintainer (Pawan in this case) will merge it into the main branch.

---

### **(pawanpediredla@gmail.com)**

To use this email for Git commits, ensure it's added in your **Git configuration** (on your local machine):

```bash
git config --global user.email "pawanpediredla@gmail.com"
```

This will associate your commits with the specified email.

---









