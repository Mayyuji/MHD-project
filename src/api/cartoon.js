// 专门处理漫画数据
import request from '../utils/request'
import { format } from '@/utils/apiHelp'
/**
 * 获取轮播图的数据
 * https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123
 */
export const getBanner = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 123
    }
  })
}
/**
 * 获取轮播图的数据
 * https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
 */
export const recommendList = () => {
  return request({
    url: '/api/comic_v2/customerview',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      viewtype: 1
    }
  })
}
/**
 * 获取分类导航
 * https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125
 */
export const getTypes = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 125
    }
  })
}
/**
 * 获取分类导航对应列表
 * https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
 */
export const getTypesList = (subject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({ subject, pageno, pagesize })
  })
}
/**
 * 获取排行榜数据
 * https://mhd.zhuishushenqi.com/comic_v2/comicsrank?apptype=8&appversion=1.0&channel=web-app
 * {"ranktype":6,"pageno":1,"pagesize":20}
 */
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({ ranktype, pageno, pagesize })
  })
}
/**
 * 获取vip榜单
 * https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
 * {"pageno":1,"pagesize":15,"special":892}
 */
export const getVipkList = () => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({ pageno: 1, pagesize: 15, special: 892 })
  })
}
