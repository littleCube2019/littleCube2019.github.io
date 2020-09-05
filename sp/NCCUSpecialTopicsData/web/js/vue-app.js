var youtube_items = new Vue({
    el: '#youtube-items',
    data:{
        items: [],
    },
    methods: {
      divturnoff: function(divid){
        var s = document.getElementById( divid ).style;
        s.display = ( s.display == 'none' ) ? '' : 'none' ;
      },
    },
    created: function() {
        this.items.push(
            {
                channel: "伯恩夜夜秀",
                videos: [
                    {
                        vid: "R0UBOYWEu28",
                        comments: [
                            {Author: "兆老爺子", Content: "言詞犀利、選擇障礙，這是國小造樣造句嗎XD", Vid: "R0UBOYWEu28", Vote: "1"},
                            {Author: "陳茂霖", Content: "它說我在節目上言詞犀利但是在食物上面似乎有選擇障礙....欸!(音樂聲下)", Vid: "R0UBOYWEu28", Vote: "136"},
                            {Author: "Feoul Mac", Content: "言詞犀利 選擇障礙 什麼跟什麼 哈哈哈哈哈哈哈哈😂😂😂😂趁機放婚紗照真的是🤣", Vid: "R0UBOYWEu28", Vote: "36"},
                            {Author: "ChenNing Yu", Content: "⬇️單身不爽的", Vid: "R0UBOYWEu28", Vote: "1"},
                            {Author: "イシザンエレナ", Content: "單身狗蔡哥表示羨慕勝利組～😝", Vid: "R0UBOYWEu28", Vote: "5"},
                            {Author: "熾焱", Content: "幹……對單身狗傷害是真的很大。", Vid: "R0UBOYWEu28", Vote: "2"},
                            {Author: "厭世甜點店", Content: "已羨慕，單身31年的甜點師也想被拍", Vid: "R0UBOYWEu28", Vote: "0"},
                            {Author: "黃昶叡", Content: "我相信那位編輯一定是單身狗，在羨慕博恩啊！", Vid: "R0UBOYWEu28", Vote: "0"},
                            {Author: "一本正經的胡說八道一本道", Content: "寫那篇的記者大概是單身到瘋了才會這樣吧⋯", Vid: "R0UBOYWEu28", Vote: "6"}
                        ]
                    }
                ]
            }
        )
        this.items.push(
        {
            channel: "反正我很閒",
            videos: [
              {vid:"WVwlR_vni6k",
               comments:[
                {uid:1,content: "I don't know."},
                 {uid:2, content: "I know it then."}
              ]},
              {vid:"vdNI1HvbyEE",
               comments:[
                 {uid:3,content: "Bull shit!"}
               ]}
            ]
        })
        /*this.items.push(
        {
          channel: "文老爹",
            videos: [
              {vid:"NZ28V0Gxp1o"},
              {vid:"EvJL10jzdcU"}
            ]
        })*/
        console.log("Pushing Youtube-items into item-array.")
        console.log(this.items[0].videos[0].comments[0].Content)
    },
    /*mounted: function(){
        alert(this.items[0].channel)
        alert(this.items[1])
    }*/
});

var search = new Vue({
    el: '.header',
    data:{
        search_text: "",
    },
    methods: {
        search_sunbmit: function(){
            alert(this.search_text)
        }
      }
})
