function numberOfFiles(fileSize, unit, driveSizeGB) {
  let fileSizeBytes
  if (unit === "B") fileSizeBytes = fileSize
  if (unit === "KB") fileSizeBytes = fileSize * 1000
  if (unit === "MB") fileSizeBytes = fileSize * 1000 * 1000

  let driveSizeBytes = driveSizeGB * 1000 * 1000 * 1000
  return Math.floor(driveSizeBytes / fileSizeBytes)
}
