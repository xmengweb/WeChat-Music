import xRequest from './httpUtils'

export function getVideoList(limit=20,offset=0,isShow=true) {
  return xRequest.request({
    url: '/top/mv',
    data: {
      limit: limit,
      offset:offset
    }
  },isShow)
} 

export function getDetailVideo(mvid,isShow=true) {
  return xRequest.request({
    url:'/mv/detail',
    data:{
      mvid
    }
  },isShow)
}

export function getPlayAddress(id,isShow=true){
  return xRequest.request({
    url:'/mv/url',
    data:{
      id
    }
  },isShow)
}
export function getRecommandInfo(mvid,isShow=true){
  return xRequest.request({
    url:'/simi/mv',
    data:{
      mvid
    }
  },isShow)
}