export const getChartData = (data: string | undefined) => {
  const dataSet: string[] = [];
  const labels: string[] = [];

  const arrayFromData = data?.replace(/\n/g, " ").trim().split(" ");

  arrayFromData?.forEach((element) => {
    if (element.match(/[0-9]/)) {
      dataSet.push(element);
    } else {
      labels.push(element);
    }
  });

  return [dataSet, labels];
};
