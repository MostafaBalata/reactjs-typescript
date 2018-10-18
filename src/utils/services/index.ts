interface IProperty {
  type: string,
  title: string,
  default: string
}

export const getColumnsFromModel = (model: any) => {
  const properties: IProperty[] = model.properties;
  const columnsAsArray = Object.keys(properties);

  return columnsAsArray.map((key: string) => {
    return {
      columns: [{
        Header: model.properties[key].title,
        accessor: key
      }]
    };
  })

}