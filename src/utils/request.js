export default function (url, data='', method='GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://localhost:4000' + url,
      data,
      method,
      success: (res) => {
        resolve(res.data);
      },
      fail: (error) => {
        console.log(error);
      }
    })
  })
}
