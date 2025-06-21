var comment_000=' 제 6판: 5판에 없던 항목 028 기록관리학 추가'
var comment_500=' 과거 610 건축예술을 540 건축으로 통합'
var comment_600=' 과거 610 건축예술을 540 건축으로 통합'


function commentHandler(self, comment_num) {
    var target=document.querySelector('span')
    if (self.value === '▶') {
        target.textContent=comment_num;
        self.value= '◀';
    }
    else {
        target.textContent='';
        self.value= '▶'
    }
}