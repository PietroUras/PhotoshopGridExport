# Photoshop Grid Exporter

This repository contains two Adobe Photoshop scripts to help you easily create Instagram grid posts. These scripts are especially useful for setting up and exporting grids designed for Instagram feeds, where each individual post has a **4:5 aspect ratio (1080x1350 pixels)** by default.

---

## Table of Contents
1. [Grid Example](#grid-example)
2. [How to Install](#how-to-install)
3. [Workflow](#workflow)
   - [Setup the Grid](#1-setup-the-grid)
   - [Export the Grid](#2-export-the-grid)
4. [Custom Dimensions](#custom-dimensions)
5. [Scripts Included](#scripts-included)
6. [Notes](#notes)
7. [Results](#results)
8. [License](#license)

---

## Grid Example

Look at this image:

![Instagram Grid Example](example/Florence.png)

To achieve this result and export it as three separate photos, follow these steps:

1. **Set the Document Size**  
   For a 3x1 grid:  
   - Width = `1080 x 3 = 3240 pixels`  
   - Height = `1350 x 1 = 1350 pixels`  

2. **Run the Scripts**  
   - Use `photoshopGridSetup` to organize your grid.  
   - After completing your composition and saving the file, run `exportPhotoshop` to generate individual posts.

---

## How to Install

1. Download the scripts from this repository.
2. Place the `.jsx` files in your Photoshop scripts directory:  
   - On Windows:  
     `C:\Program Files\Adobe\Adobe Photoshop [Version]\Presets\Scripts`  
   - On macOS:  
     `/Applications/Adobe Photoshop [Version]/Presets/Scripts`

3. Restart Photoshop if it was open.

4. Access the scripts from **File > Scripts > [Script Name]**.

---

## Workflow

### 1. **Setup the Grid**
1. Ensure the dimensions of your Photoshop document are correct:  
   - **Width** = `1080 * number of columns`  
   - **Height** = `1350 * number of rows`  

   Example:  
   - For a 3x3 grid (9 posts), set the dimensions to `3240 x 4050 pixels`.

2. Run the script **`photoshopGridSetup`** to prepare your document.  
   (This step sets up the grid structure but does not modify your content.)

3. Create your composition and save the PSD file.

---

### 2. **Export the Grid**
1. Run the script **`exportPhotoshop`**.  
   This will:
   - Divide your document into individual slices.
   - Save each slice as a **JPEG** in a folder named after your PSD file.

---

## Custom Dimensions

If you want to use custom dimensions (e.g., 1000x1250 instead of 1080x1350), you can do so by:  
1. Ensuring **you use the same values for both scripts** (`photoshopGridSetup` and `exportPhotoshop`).  
2. Updating the `sliceWidth` and `sliceHeight` values when prompted by the scripts.

---

## Scripts Included

- **`photoshopGridSetup.jsx`**  
  Sets up a grid in your Photoshop document for an Instagram feed.

- **`exportPhotoshop.jsx`**  
  Divides the grid into slices and exports them as JPEGs into a folder named after the PSD file.

---

## Notes

- Make sure your document dimensions match the Instagram grid format or your custom dimensions before running the scripts.
- Always save your PSD file before exporting the slices.
- The slices are exported at the highest JPEG quality (`12`) to ensure top resolution.

---

## Results

Check out my Instagram profile to see the results created using these scripts:  
[https://www.instagram.com/pietrourasph/](https://www.instagram.com/pietrourasph/)

---

## License

This project is licensed under the MIT License.
