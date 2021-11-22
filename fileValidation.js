function fileValidation(file) {
  const filename = file.name;
  const ext = filename.substr(filename.lastIndexOf(".") + 1);
  const maxSizeInkB = 500;
  const mimeTypeAllowed = ["jpg", "png"];
  if (!mimeTypeAllowed.includes(ext?.toLowerCase())) {
    return "Only jpg and png files are allowed";
  }
  const kb = file.size / 1024;
  if (kb > maxSizeInkB) {
    return "File size should less than 500kB";
  }
}
