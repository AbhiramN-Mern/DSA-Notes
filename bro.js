fetch("https://brocamp-bucket.blr1.digitaloceanspaces.com/...")
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    console.log("Image URL:", url);

    // Example: Display in an <img> tag
    document.getElementById("img").src = url;
  });
