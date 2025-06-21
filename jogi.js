var jogi_list=["표준구분표", "지역구분표", "국어구분표", "문학형식구분표", "언어공통구분표", "종교공통구분표"];
        var std_list=['철학 및 이론', '잡저', '사전, 인용어사전, 약어집', '강연집, 수필집, 연설문집', '연속간행물', '간종 단체, 조직 및 경영', '지도법, 연구법 및 교육, 교육자료', '총서, 전집, 선집', '역사 및 지역구분'];

        function print_stdlist(list_name) {
            document.write('<h2 class="jogi_title">',jogi_list[0], '</h2><br>');
            var i=1;
            while (i<=std_list.length) {
                document.write('<p class="contents_list">',"-0", i," ", list_name[i-1], '</p>');
                i=i+1;
            }
        }

        document.write('<div id=\'jogi_box\'>');
        print_stdlist(std_list);
        document.write('<br>');
        document.write('</div>');


        var local_list=["아시아", "유럽", "아프리카", "북아메리카", "남아메리카", "오세아니아, 양극지방", "지역구분 일반", "해양"]
        var nation_language_list=['한국어', '중국어', '일본어', '영어', '독일어', '프랑스어', '스페인어', '이탈리아어', '기타 제어'];
        var liter_list=['시', '희곡', '소설', '수필, 소품', '연설, 웅변', '일기, 서간, 기행', '풍자 및 유머', '르포르타주 및 기타'];
        var language_list=['음운 및 문자', '어원', '사전', '어휘', '문법', '작문', '독본, 해석, 회화', '방언(사투리)'];
        var religion_list=['교리, 교의', '종교창시자(교주) 및 제자', '경전, 성전', '종교신앙, 신앙록, 신앙생활, 수도생활', '선포, 포교, 전도, 교화(교육) 활동', '종단, 교단', '예배형식, 의식, 의례', '종파, 교파'];

        var list_name=[local_list, nation_language_list, liter_list, language_list, religion_list]

        function print_list(list) {
            for (var i = 0; i < list.length; i++) {
                document.write('<p class="contents_list">',"-", i+1," ", list[i], '</p>');
            }
        }

        var j=1;
        while (j < jogi_list.length) {
            document.write('<div id="jogi_box">');
            document.write('<h2 class="jogi_title">', jogi_list[j],'</h2><br>');
            print_list(list_name[j - 1]);
            document.write('<br><br></div>');
            j++;
        }