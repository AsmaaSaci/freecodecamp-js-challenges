function numberOfPhotos(photoSizeMB, driveSizeGB) {
  return Math.floor((driveSizeGB * 1000) / photoSizeMB);
}
