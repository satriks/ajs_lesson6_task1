

export default function orderByProps(object, sort) {
  const sortObj = [];

  for (const sortItem of sort) {
    sortObj.push({
      key: sortItem,
      value: object[sortItem],
    });
  }

  const sortList = Object.keys(object).filter((el) => !sort.includes(el));

  for (const unsortItem of sortList.sort()) {
    sortObj.push({
      key: unsortItem,
      value: object[unsortItem],
    });
  }

  return sortObj;
}

