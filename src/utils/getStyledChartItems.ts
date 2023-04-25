const getColor = (index: number, colors: string[]): string => {
  if (index >= colors.length) {
    return getColor(index - colors.length, colors);
  }

  return colors[index];
};

export const getStyledChartItems = (
  initialArr: string[],
  secondaryArr: string[]
) => {
  const result = initialArr.map((elem, index) => {
    const color = getColor(index, secondaryArr);

    return {
      value: elem,
      itemStyle: {
        color: color,
      },
    };
  });

  return result;
};
