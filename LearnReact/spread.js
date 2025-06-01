function log(log) {
  console.log(log);
}
var arr1 = ["JS", "Jva", "PHP"];
var arr2 = ["React", "dart"];
var arr3 = [...arr1, ...arr2];

var defautConfig = {
  api: "http://domain-trang",
  apiVesion: "V3",
};
var realConfig = {
  ...defautConfig,
  apiVesion: "V4",
};
log(realConfig);
