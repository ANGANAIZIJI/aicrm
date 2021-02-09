/*
 * @Author: suwanqing
 * @Date: 2021-01-20 14:09:42
 * @LastEditors: suwanqing
 * @LastEditTime: 2021-01-20 14:49:04
 * @Description: file content
 */
import pinyin from 'pinyin'

export default {
  data() {
    return {
    }
  },
  methods: {
    getUpperAlpha(arr) {
      if (Array.isArray(arr)) {
        if (arr.length <= 0) return arr
        let temp = []
        const obj = {}
        arr.sort((a, b) => {
          return a.localeCompare(b)
        })
        arr.forEach(v => {
          const lower = pinyin(v.slice(0, 1), {
            style: pinyin.STYLE_FIRST_LETTER
          })[0][0]
          temp.push(lower)
          if (obj[lower]) {
            obj[lower].push(v)
          } else {
            obj[lower] = [v]
          }
        })
        temp = [...new Set(temp)]
        return { temp, obj }
      }
    }
  }
}
