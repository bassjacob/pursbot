module.exports.slack = function slack(ev, ctx, cb) {
  cb(null, {
    statusCode: 200,
    body: JSON.stringify(ev.body)
  });
}
