function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const videoUnits = { B: 1, KB: 1e3, MB: 1e6, GB: 1e9 };
  const driveUnits = { GB: 1e9, TB: 1e12 };
  
  if (!(videoUnit in videoUnits)) return "Invalid video unit";
  if (!(driveUnit in driveUnits)) return "Invalid drive unit";
  
  let videoBytes = videoSize * videoUnits[videoUnit];
  let driveBytes = driveSize * driveUnits[driveUnit];
  
  return Math.floor(driveBytes / videoBytes);
}
