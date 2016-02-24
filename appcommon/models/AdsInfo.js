/**
 * Created by LocNT on 1/4/16.
 */

function TrollItemPage(){
    this.id = 0;
    this.type = "UNTYPE"
    this.content_id = 0;
    this.content_title = "";
    this.content_embed = "";
    this.content_poster = "";
    this.count_like = 0;
    this.count_share = 0;
    this.content_time = new Date();
};

module.exports = TrollItemPage;