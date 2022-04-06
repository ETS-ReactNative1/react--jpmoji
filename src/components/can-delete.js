const handleCharacterRangeSelected = (selectedIndex) => {
  if (isStartIndexSelected) {
    setEndIndex(selectedIndex);
    setIsEndIndexSelected(true);
    setWholeRange(_.range(startIndex, selectedIndex + 1));
    if (startIndex > selectedIndex)
      setWholeRange(_.range(selectedIndex, startIndex + 1));
  } else {
    setStartIndex(selectedIndex);
    setIsStartIndexSelected(true);
    setWholeRange([selectedIndex]);
  }
  if (isStartIndexSelected && isEndIndexSelected) {
    setEndIndex(0);
    setStartIndex(selectedIndex);
    setIsStartIndexSelected(true);
    setIsEndIndexSelected(false);
    setWholeRange([selectedIndex]);
  }
};
