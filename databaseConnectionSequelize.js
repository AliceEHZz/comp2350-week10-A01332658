const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi =
  "mysql://freedb_2350_main:E&Vj97Da7NS6%c8@ sql.freedb.tech:3306/ freedb_comp2350-week2-A01332658";
const dbConfigLocal =
  "mysql://root:SQLJ?~3u%COMP2350zx7DxYeGm+@localhost/web_user";
if (is_qoddi) {
  var databaseConnectionString = dbConfigQoddi;
} else {
  var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;
