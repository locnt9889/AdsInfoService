/**
 * Created by LocNT on 7/29/15.
 */

var GENERIC_SQL = {
    SLQ_FINDALL : "SELECT * FROM ??",
    SLQ_FINDALL_ACTIVE : "SELECT * FROM ?? WHERE ?? = 1",
    SLQ_FINDONE_BY_ID : "SELECT * FROM ?? WHERE ?? = ?",
    SLQ_FINDALL_BY_FIELD : "SELECT * FROM ?? WHERE ?? = ?",
    SLQ_FINDALL_BY_FIELD_ACTIVE : "SELECT * FROM ?? WHERE ?? = ? AND isActive = 1",
    SLQ_ADD_NEW : "INSERT INTO ?? SET ?",
    SLQ_UPDATE : "UPDATE ?? SET ? WHERE ?? = ?",
    SLQ_DO_INACTIVE : "UPDATE ?? SET active = 0 WHERE ?? = ?",
    SLQ_REMOVE : "DELETE FROM ?? WHERE ?? = ?"
}

var ADS_INFO_SQL_SCRIPT = {

}
/*Exports*/

module.exports = {
    GENERIC_SQL : GENERIC_SQL,
    ADS_INFO_SQL_SCRIPT : ADS_INFO_SQL_SCRIPT
}