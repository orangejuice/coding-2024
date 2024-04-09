function minByOrder(database, columns) {
  // 按照 columns 中列名的顺序对数据库进行排序
  const sorted = database.slice().sort((a, b) => {
    for (const column of columns) {
      const valueA = a[column]
      const valueB = b[column]

      // 判断值的类型,并使用对应的比较逻辑
      const typeA = typeof valueA
      const typeB = typeof valueB

      let result
      if (typeA === "string" || typeB === "string") {
        // 如果有一个值是字符串,将两个值都转为小写字符串进行比较
        const stringA = (valueA || "").toLowerCase()
        const stringB = (valueB || "").toLowerCase()
        result = stringA.localeCompare(stringB)
      } else {
        // 否则,将 null 或 undefined 视为 0,进行数值比较
        const numericA = valueA || 0
        const numericB = valueB || 0
        result = numericA - numericB
      }

      if (result !== 0) return result
    }
    return 0
  })

  // 排序后,第一行就是最小值行
  return sorted[0]
}
