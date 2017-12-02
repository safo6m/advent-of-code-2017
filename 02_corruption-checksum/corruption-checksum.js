class CorruptionChecksum {
  calculateChecksum(spreadsheet) {
    return spreadsheet.map((row) => row.sort((x, y) => y - x)).map((row) => row[0] - row[row.length - 1]).reduce((sum, rowDifference) => sum + rowDifference, 0);
  }
}
