const logFeature = (req, res, next) => {
    console.log("đây là tính năng lấy danh sách học sinh");
    next(); // chạy xuống middleware tiếp theo
};

module.exports = {
    logFeature
}