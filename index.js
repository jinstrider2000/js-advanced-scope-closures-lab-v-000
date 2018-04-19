function produceDrivingRange(maxRange) {
  return (firstStreet, secondStreet) => {
    let diff = Number.abs(Number.parseInt(firstStreet)-Number.parseInt(secondStreet));
    if (diff <= maxRange) {
      return `within range by ${maxRange-diff}`;
    } else {
      return `${diff-maxRange} blocks out of range`;
    }
  }
}