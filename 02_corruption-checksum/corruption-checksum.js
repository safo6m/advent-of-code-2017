class CorruptionChecksum {
  calculateChecksum(spreadsheet) {
    return spreadsheet.map((row) => row.sort((x, y) => y - x))
                      .map((row) => row[0] - row[row.length - 1])
                      .reduce((sum, rowDifference) => sum + rowDifference, 0);
  }

  sumResultOfWholeDivisions(spreadsheet) {
    return spreadsheet.map((row) => row.sort((x, y) => y - x))
                      .map((row) => {
                        return row.map((dividend, index) => {
                          return row.slice(index + 1)
                                    .filter((divisor) => divisor)
                                    .map((divisor) => dividend / divisor)
                                    .filter((quotient) => Number.isInteger(quotient))
                                    .reduce((sum, currentValue) => sum + currentValue, 0);
                        }).reduce((sum, rowResult) => sum + rowResult, 0);
                      }).reduce((sum, rowResult) => sum + rowResult, 0);
  }
}
