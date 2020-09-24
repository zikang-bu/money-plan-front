import ajax from './apiRouters'

/*** 记账 ***/
export const BOOK_ITEMS = '/api/v1/book/items'
export const BOOK_ITEM = '/api/v1/book/item'

// 获取记账列表
export const getBookItems = (page, page_size, keyword) => {
  return ajax.get(BOOK_ITEMS, {
    params: {
      page,
      page_size,
      keyword
    }
  })
}

// 更新记账实例
export const updateBookItem = (id, item) => {
  return ajax.put(BOOK_ITEM, {
    id,
    item
  })
}

// 设置记账实例
export const setBookItem = data => {
  return ajax.post(BOOK_ITEM, data)
}

// 设置记账实例
export const deleteBookItem = id => {
  return ajax.delete(BOOK_ITEM, {
    params: {
      id
    }
  })
}

// 查询记账实例ById
export const getBookItem = id => {
  return ajax.get(BOOK_ITEM, {
    params: {
      id
    }
  })
}