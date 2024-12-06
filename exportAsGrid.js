#target photoshop

// Divide the image horizontally with a step specified by the user

if (app.documents.length == 0) {
    alert("No document is open!");
}

else {
    var doc = app.activeDocument;

    // Decide the width of a single slice
    var sliceWidth = parseInt(prompt("Enter the slice width in pixels:", "1080"), 10);

    // Decide the height of a single slice
    var sliceHeight = parseInt(prompt("Enter the slice height in pixels:", "1350"), 10);

    // Check if the width is a valid number
    if (isNaN(sliceWidth) || sliceWidth <= 0) {
        alert("Please enter a valid width.");
    }
    else if (parseInt(doc.width) % sliceWidth != 0) {
        alert("The document width must be divisible by " + sliceWidth + " pixels.");
    }
    // Check if the height is a valid number
    else if (isNaN(sliceHeight) || sliceHeight <= 0) {
        alert("Please enter a valid height.");
    }
    else if (doc.height % sliceHeight != 0) {
        alert("The document height must be divisible by " + sliceHeight + " pixels.");
    }

    // Divide the image into slices
    else {
        // Number of sections
        var numHorizontalSlices = doc.width / sliceWidth;
        var numVerticalSlices = doc.height / sliceHeight;

        // Save JPEG settings
        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;

        // Get the folder path of the PSD document
        var docFolder = doc.path;
        var docName = doc.name.replace(/\.[^\.]+$/, ''); // Remove the file extension
        var exportFolder = new Folder(docFolder + "/" + docName);

        // Create the folder if it doesn't exist
        if (!exportFolder.exists) {
            exportFolder.create();
        }

        for (var i = 0; i < numHorizontalSlices; i++) {

            for (var j = 0; j < numVerticalSlices; j++) {
                // Duplicate the document
                var sliceDoc = doc.duplicate("Slice_" + (i + j), true);

                // Define the cropping region
                var cropX = i * sliceWidth;
                var cropRegion = [cropX, j * sliceHeight, cropX + sliceWidth, (j + 1) * sliceHeight];

                // Crop the duplicated document
                sliceDoc.crop(cropRegion);

                // Save the cropped section as a JPEG
                var filePath = new File(exportFolder + "/" + doc.name.replace(/\.[^\.]+$/, '') + "_row" + (j + 1) + "_column" + (i + 1) + ".jpg");
                sliceDoc.saveAs(filePath, jpegOptions, true, Extension.LOWERCASE);

                // Close the duplicated document without saving changes
                sliceDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }

        alert("Division completed!");
    }
}
