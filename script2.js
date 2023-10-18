let img_num = 0;
const first_bridge = 15;
let user_score = 50;
let clear = 0;
let stage_num = 0;
let stage_now = [0,0,0,0,0];
let end_num = 0;

let next_bt_click = () => {
    img_num++;
    document.querySelector('#main_img').style.animationName = 'init_main_img';
    console.log(img_num);

    if (img_num == 10){
        document.querySelector('.all_container').style.display = 'none';
        document.querySelector('.full_logo_container').style.display = 'block';
        document.querySelector('.full_logo_container').style.animationName = 'init_full_logo_container';
        document.querySelector('body').style.animationName = 'full_logo_body';
        setTimeout(()=>{
            document.querySelector('.all_container').style.display = 'block';
            document.querySelector('.full_logo_container').style.display = 'none';
            document.querySelector('#second_logo').src = 'img/logo_black.png';
        }, 5000);
    }

    if (img_num == 15){
        document.querySelector('.main_container').style.animationName = 'cardNews_main_container';
        document.querySelector('#main_img').style.height = '400px';
        document.querySelector('.bt_container').style.animationName = 'cardNews_bt_container';
    }

    if (img_num < 15){
        document.querySelector('#main_img').src = `img/story${img_num}.png`;
    }

    if ((img_num >= 15) && (img_num<18)){
        document.querySelector('#main_img').src = `img/cardNews${img_num-first_bridge}.png`;
    }

    if (img_num == 18){
        document.querySelector('.main_container').style.animationName = 'quiz_main_container';
        document.querySelector('#main_img').style.display = 'none';
        document.querySelector('.quiz_container').innerHTML += `
            <h1 style = "font-size: 50px; color: #1c387d;">블록체인에 대한 설명으로 올바른 것은?</h1><br>
            <h4 id = "aa1" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">1. 누구나 열람할 수 있는 장부에 거래 내역을 투명하게 공개한다.</h4>
            <h4 id = "aa2" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">2. 여러 대의 컴퓨터에 복제하는 것을 막고 한 대의 컴퓨터에 저장하는 데이터 저장 기술이다.</h4>
            <h4 id = "aa3" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">3. 거래 때마다 모든 거래 참여자들이 정보 공유하는 것을 방지하여 거래 내역 유출을 막을 수 있다.</h4>
            <h4 id = "aa4" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">4. 블록체인은 가상화폐를 만들기 위해 제작된 기술로 가상통화에만 사용된다.</h4>
        `;
        document.querySelector('.bt_container').style.display = 'none';
    }

    if (img_num == 19){
        document.querySelector('.main_container').style.animationName = 'init_main_container';
        document.querySelector('.quiz_container').innerHTML = '';
        document.querySelector('#main_img').style.display = 'inline';
        document.querySelector('#main_img').src = `img/story${img_num}.png`;
        document.querySelector('#main_img').style.height = '500px';
        document.querySelector('.main_container').style.animationName = 'cardToInit_main_container';
        document.querySelector('.bt_container').style.display = 'block';
        document.querySelector('.bt_container').style.animationName = 'basic_bt_container';
    }
    
    if ((img_num > 19) && (img_num <= 26)){
        document.querySelector('#main_img').src = `img/story${img_num}.png`;

        if (img_num == 22){
            document.querySelector('#main_img').src = `img/story${img_num}.gif`;
        }
    }

    if (img_num == 27){
        document.querySelector('.main_container').style.backgroundImage = `url('img/map_bg.png')`;
        document.querySelector('.main_container').style.backgroundRepeat = 'no-repeat';
        document.querySelector('.main_container').style.backgroundSize = 'cover';
        
        document.querySelector('#second_logo').src = 'img/logo_white_real.png';
        document.querySelector('body').style.animationDuration = '5s';
        document.querySelector('body').style.animationName = 'map_body';
        document.querySelector('#main_img').style.display = 'none';
        document.querySelector('.bt_container').style.display = 'none';
        document.querySelector('.main_container').style.border = 'none';
        document.querySelector('.main_container').innerHTML += `
            <div class = "explain_container">
                <div class = "black_sub">  
                    <h1 style = "color: white;">" 각 스테이지로 이어진 포탈을 클릭해 흩어진 블록을 찾자! "</h1><br>
                </div>
                <div class="button_base b07_3d_double_roll" onclick = "next_bt_click()" style = "margin-top: 0;">
                        <div>다음</div>
                        <div>다음</div>
                        <div>다음</div>
                        <div>다음</div>
                </div>
            </div>
            <div class = "door_box" style = "display: none;">
                <img src = "img/door.gif" id = "map_door0" value = "zero" class = "map_door" onclick = "stage_0();"><br>
                <img src = "img/door.gif" id = "map_door1" value = "first" class = "map_door" onclick = "stage_1();"><br>
                <img src = "img/door.gif" id = "map_door2" value = "second" class = "map_door" onclick = "stage_2();"><br>
                <img src = "img/door.gif" id = "map_door3" value = "third" class = "map_door" onclick = "stage_3();">
                <img src = "img/door.gif" id = "map_door4" value = "fourth" class = "map_door" onclick = "stage_4();">
            </div>
        `;
    }

    if (img_num == 28){
        document.querySelector('.explain_container').style.display = 'none';
        document.querySelector('#map_door2').style.opacity = '1';
        document.querySelector('.door_box').style.display = 'block';
    }

    setTimeout(()=>{
        document.querySelector('#main_img').style.animationName = 'main_img_basic';
    },300); 
};

let quiz0_answer = (x) => { // x는 선지 id
    if (x.split('')[2] == 1){
        score_up();
        next_bt_click();
    }else{
        window.alert('이건 아니었던 것 같아..');
        score_down();
    }
};

let quiz1_answer1 = (x) => {
    if (x.split('')[2] == 2){
        window.alert('좋았어!');
        score_up();
        stage_0();
    }else{
        window.alert('이건 아니었던 것 같아..');
        score_down();
    }
};

let quiz2_answer1 = (x) => {
    if (x.split('')[2] == 4){
        window.alert('정답이야!');
        score_up();
        stage_1();
    }else{
        window.alert('이건 아니었던 것 같아..');
        score_down();
    }
};

let quiz3_answer1 = (x) => {
    if (x.split('')[2] == 2){
        window.alert('그렇지!');
        score_up();
        stage_2();
    }else{
        window.alert('이건 아니었던 것 같아..');
        score_down();
    }
};

let quiz4_answer1 = (x) => {
    if (x.split('')[2] == 4){
        score_up();
        stage_3();
    }else{
        window.alert('이건 아니었던 것 같아..');
        score_down();
    }
};

let quiz4_answer2 = (x) => {
    if (x.split('')[2] == 3){
        window.alert('풀었다!');
        score_up();
        stage_3();
    }else{
        window.alert('이건 아니었던 것 같아..');
        score_down();
    }
};

let score_down = () => {
    if (!(user_score == 0)){
        user_score -= 10;
    }
};

let score_up = () => {
    if (!(user_score == 100)){
        user_score += 100;
    }
};

let stage_0 = () => {
    stage_now = [1,0,0,0,0]; // 마지막에 초기화 시키기
    stage_num++;
    if (stage_num == 1){
        document.querySelector('.main_container').style.display = 'none';
        document.querySelector('.each_stage_container').style.display = 'block';
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.explain_box').style.display = 'block';
        document.querySelector('.text_space').innerHTML = `<h1 style = "color: white;">
            "<br>
            이곳은 디지털 자산 마을이야!<br>
            <br>
            마을 곳곳에 디지털 자산과 관련된 안내 포스터가 붙어있어..<br>
            <br>
            안내 포스터를 천천히 읽어보며 블록을 찾아보자!
            <br>
            "</h1>
        `;
    }
    if (stage_num == 2){
        document.querySelector('.explain_box').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
        setTimeout(() => {
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('#stage_img').style.display = 'inline';
            document.querySelector('#stage_img').src = `img/stageBgzero.png`;
            document.querySelector('.bt_container_2').style.display = 'block';
        }, 2000);
    }

    if (stage_num == 3){
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('#stage_img').src = `img/stage0_card${stage_num}.png`;
    }

    if ((stage_num > 3) && (stage_num < 7)){
        document.querySelector('#stage_img').src = `img/stage0_card${stage_num}.png`;
    }

    if (stage_num == 7){
        document.querySelector('.base_stage').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'quiz1';
        document.querySelector('.stage_quiz').innerHTML += `
        <h1 style = "font-size: 40px; color: rgb(57, 148, 223);">디지털 자산에 대한 설명으로 올바른 것은?</h1><br>
            <h4 id = "aa1" style = "font-size: 30px" class = "ans" onclick = "quiz1_answer1(this.id)">1. 테더라고도 불리는 'USDT'는 USDT의 가치가 달러와 가격이 1:0.5로 환산되게 만들어 둔 코인으로, 스테이블 코인이다.</h4><br>
            <h4 id = "aa2" style = "font-size: 30px" class = "ans" onclick = "quiz1_answer1(this.id)">2. 디지털 자산은 비트코인 같은 암호화폐 뿐만 아니라 하드디스크, SSD와 같은 기억장치에 저장될 수 있는 사진, 음원과 같은 저작물 등 전산화되어 존재하는 모든 종류의 자산을 말한다.</h4><br>
            <h4 id = "aa3" style = "font-size: 30px" class = "ans" onclick = "quiz1_answer1(this.id)">3. 비트코인이 가진 한계를 보완하고 이를 대체하겠다는 목표로 등장한 코인은 이더리움, 리플, 도지코인 등으로 구분되며 이를 통틀어 알트코인이라고 한다.</h4><br>
            <h4 id = "aa4" style = "font-size: 30px" class = "ans" onclick = "quiz1_answer1(this.id)">4. 업비트에서는 '트레블룰'이라는 절차를 시행 중인데, 트레블룰이란 거래소 간 100만원 상당 이상의 코인을 주고 받을 때 송금인과 수취인의 성명, 국적, 주소 등을 기록하는 절차를 의미한다.</h4>
        `;
    }

    if (stage_num >= 8){
        

        if (stage_num == 10){
            clear++;
            check_clear();
            document.querySelector('#stage_img').style.display = 'none';
            document.querySelector('.base_stage').style.display = 'none';
            document.querySelector('.main_container').style.display = 'block';
            document.querySelector('#map_door0').src = 'img/u_block.png';
            document.querySelector('#map_door0').onclick = 'console.log(`finish`);';
            stage_now = [0,0,0,0,0];
            stage_num = 0;
            document.querySelector('.explain_box').display = 'block';
            document.querySelector('.each_stage_container').style.display = 'none';
        }else{
            document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('.stage_quiz').innerHTML = '';
            document.querySelector('#stage_img').src = `img/stage0_card${stage_num}.png`;
        }
    }
};

let stage_1 = () => {
    stage_now = [0,1,0,0,0]; // 마지막에 초기화 시키기
    stage_num++;
    if (stage_num == 1){
        document.querySelector('.main_container').style.display = 'none';
        document.querySelector('.each_stage_container').style.display = 'block';
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.explain_box').style.display = 'block';
        document.querySelector('.text_space').innerHTML = `<h1 style = "color: white;">
            "<br>
            이곳은 업비트 마을이야!<br>
            <br>
            포탈에서 가장 가까운 마을.. 역시 강한 블록의 힘이 느껴져..<br>
            <br>
            어서 마을을 둘러보자!
            <br>
            "</h1>
        `;
    }
    if (stage_num == 2){
        
        document.querySelector('.explain_box').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
        setTimeout(() => {
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('#stage_img').style.display = 'inline';
            document.querySelector('#stage_img').src = `img/stageBgone.png`;
            document.querySelector('.bt_container_2').style.display = 'block';
        }, 2000);
    }

    if (stage_num == 3){
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('#stage_img').src = `img/stage1_card${stage_num}.png`;
    }

    if ((stage_num > 3) && (stage_num < 11)){
        document.querySelector('#stage_img').src = `img/stage1_card${stage_num}.png`;
    }

    if (stage_num == 11){
        document.querySelector('.base_stage').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'quiz1';
        document.querySelector('.stage_quiz').innerHTML += `
        <h1 style = "font-size: 40px; color: rgb(57, 148, 223);">업비트에 대한 설명으로 올바른 것은?</h1><br>
            <h4 id = "aa1" style = "font-size: 30px" class = "ans" onclick = "quiz2_answer1(this.id)">1. KRW(원화) 마켓, USDT(테더) 마켓 두 가지뿐이다.</h4><br>
            <h4 id = "aa2" style = "font-size: 30px" class = "ans" onclick = "quiz2_answer1(this.id)">2. 업비트에서 최소 주문 가능 금액은 KRW 마켓 - 1,000 KRW, BTC 마켓 - 0.0005 BTC, USDT 마켓 - 0.0005 USDT이다.</h4><br>
            <h4 id = "aa3" style = "font-size: 30px" class = "ans" onclick = "quiz2_answer1(this.id)">3. 업비트에서 사용자가 접수한 주문은 시간 > 가격 우선 순서로 매매가 체결된다.</h4>
            <h4 id = "aa4" style = "font-size: 30px" class = "ans" onclick = "quiz2_answer1(this.id)">4. 업비트에서 제공하는 주문 방식은 지정가 주문, 시장가 주문, 예약 주문 방식으로 사용자가 매매하려는 디지털 자산의 가격과 수량을 직접 입력하여 제출하는 주문방식을 지정가 주문이라 한다.</h4><br>
        `;
    }

    if (stage_num >= 12){
        if (stage_num == 14){
            clear++;
            check_clear();
            document.querySelector('.main_container').style.display = 'block';
            document.querySelector('#map_door1').src = 'img/p_block.png';
            document.querySelector('#map_door1').onclick = 'console.log(`finish`);';
            document.querySelector('#stage_img').style.display = 'none';
            document.querySelector('.base_stage').style.display = 'none';
            stage_now = [0,0,0,0,0];
            stage_num = 0;
            document.querySelector('.explain_box').display = 'block';
            document.querySelector('.each_stage_container').style.display = 'none';
        }else{
            document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('.stage_quiz').innerHTML = '';
            document.querySelector('#stage_img').src = `img/stage1_card${stage_num}.png`;
        }
    }
};

let stage_2 = () => {
    stage_now = [0,0,1,0,0]; // 마지막에 초기화 시키기
    stage_num++;
    if (stage_num == 1){
        document.querySelector('.main_container').style.display = 'none';
        document.querySelector('.each_stage_container').style.display = 'block';
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.explain_box').style.display = 'block';
        document.querySelector('.text_space').innerHTML = `<h1 style = "color: white;">
            "<br>
            여기는 두나무숲이야!<br>
            <br>
            왠지모르지만, 따뜻한 기운이 느껴져..<br>
            <br>
            두나무숲 속에 숨겨진 블록을 찾아내자.
            <br>
            "</h1>
        `;
    }
    if (stage_num == 2){
        
        document.querySelector('.explain_box').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
        setTimeout(() => {
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('#stage_img').style.display = 'inline';
            document.querySelector('#stage_img').src = `img/stageBgtwo.png`;
            document.querySelector('.bt_container_2').style.display = 'block';
        }, 2000);
    }

    if (stage_num == 3){
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('#stage_img').src = `img/stage2_card${stage_num}.png`;
    }

    if ((stage_num > 3) && (stage_num < 7)){
        document.querySelector('#stage_img').src = `img/stage2_card${stage_num}.png`;
    }

    if (stage_num == 7){
        document.querySelector('.base_stage').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'quiz1';
        document.querySelector('.stage_quiz').innerHTML += `
        <h1 style = "font-size: 40px; color: rgb(57, 148, 223);">두나무에 대한 설명으로 바르지 않은 것은?</h1><br>
            <h4 id = "aa1" style = "font-size: 30px" class = "ans" onclick = "quiz3_answer1(this.id)">1. 두나무에서는 업비트 뿐만 아니라 똑똑하게 투자를 돕는 증권 서비스 제공, 블록체인 서비스 제공, 메타버스 플랫폼을 제공한다.</h4><br>
            <h4 id = "aa2" style = "font-size: 30px" class = "ans" onclick = "quiz3_answer1(this.id)">2. 두나무에서는 다양한 사회공헌활동을 중심으로 사회공동체 삶에 이바지 하고 있다.</h4><br>
            <h4 id = "aa3" style = "font-size: 30px" class = "ans" onclick = "quiz3_answer1(this.id)">3. 두나무는 디지털 자산 시장의 건강한 성장과 투자자 보호를 위해 '업비트 투자자보호센터'를 출범하고 업비트케어(전문적 심리지원), 디지털 자산 교육, 투자사기 유형과 예방법 안내, 백서 번역 등 다양한 두자자 보호 서비스를 제공하고 있다.</h4><br>
        `;
    }

    if (stage_num >= 8){
        if (stage_num == 10){
            clear++;
            check_clear();
            document.querySelector('.main_container').style.display = 'block';
            document.querySelector('#map_door2').src = 'img/b_block.png'; // 이거 당장.
            document.querySelector('#map_door2').onclick = 'console.log(`finish`);';
            document.querySelector('#stage_img').style.display = 'none';
            document.querySelector('.base_stage').style.display = 'none';
            stage_now = [0,0,0,0,0];
            stage_num = 0;
            document.querySelector('.explain_box').display = 'block';
            document.querySelector('.each_stage_container').style.display = 'none';
        }else{
            document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('.stage_quiz').innerHTML = '';
            document.querySelector('#stage_img').src = `img/stage2_card${stage_num}.png`;
        }
    }
};

let stage_3 = () => {
    stage_now = [0,0,0,1,0]; // 마지막에 초기화 시키기
    stage_num++;
    if (stage_num == 1){
        document.querySelector('.main_container').style.display = 'none';
        document.querySelector('.each_stage_container').style.display = 'block';
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.explain_box').style.display = 'block';
        document.querySelector('.text_space').innerHTML = `<h1 style = "color: white;">
            "<br>
            여긴 메타버스 공장이잖아??<br>
            <br>
            공장 안으로 체인이 이어져 있긴한데..<br>
            <br>
            윽.. 출입문이 퀴즈로 막혀있어... 그래도 풀어보자!
            <br>
            "</h1>
        `;
    }
    if (stage_num == 2){
        
        document.querySelector('.explain_box').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
        setTimeout(() => {
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('#stage_img').style.display = 'inline';
            document.querySelector('#stage_img').src = `img/stageBgthree.png`;
            document.querySelector('.bt_container_2').style.display = 'block';
        }, 2000);
    }

    if (stage_num == 3){
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.base_stage').style.display = 'none'; // 끝날때 보고 설정
        document.querySelector('.meta_container').style.display = 'block'; // 끝날때 none으로 설정
        document.querySelector('.meta_quiz').innerHTML = `1. 현실에서의 상호작용을 가상 공간에 구현한 콘텐츠들을 통칭하며 가상, 초월을 의미하는 'OO'와 세계, 우주를 의미하는 '유니버스'(universe)를 합성한 신조어인 이것은 무엇일까요?`;
        document.querySelector('.meta_ans').innerHTML += `
        <br>
        <div id = "aa1" onclick = "quiz4_answer1(this.id);" class = "metameta">투니버스</div>
        <div id = "aa2" onclick = "quiz4_answer1(this.id);" class = "metameta">시내버스</div>
        <div id = "aa3" onclick = "quiz4_answer1(this.id);" class = "metameta">VR</div>
        <div id = "aa4" onclick = "quiz4_answer1(this.id);" class = "metameta">메타버스</div>
        `;
    }

    if (stage_num == 4){
        document.querySelector('.meta_quiz').innerHTML = `2. 업비트의 회사인 '두나무'에서 운영하고 있는 메타버스 플랫폼의 이름은 무엇인가요? 현재 이용중이신 웹사이트의 부제목인 'Find the Lost OOOOO'의 빈칸 속 단어가 들어갑니다!`;
        document.querySelector('.meta_ans').innerHTML = `
        <br>
        <div id = "aa1" onclick = "quiz4_answer2(this.id);" class = "metameta">퍼스트블록</div>
        <div id = "aa2" onclick = "quiz4_answer2(this.id);" class = "metameta">메타블록</div>
        <div id = "aa3" onclick = "quiz4_answer2(this.id);" class = "metameta">세컨블록</div>
        <div id = "aa4" onclick = "quiz4_answer2(this.id);" class = "metameta">유어블록</div>
        `;
    }

    if (stage_num >= 5){
        if(stage_num == 7){
            clear++;
            check_clear();
            document.querySelector('.main_container').style.display = 'block';
            document.querySelector('#map_door3').src = 'img/i_block.png'; // 이거 당장.
            document.querySelector('#map_door3').onclick = 'console.log(`finish`);';
            document.querySelector('#stage_img').style.display = 'none';
            document.querySelector('.base_stage').style.display = 'none';
            stage_now = [0,0,0,0,0];
            stage_num = 0;
            document.querySelector('.explain_box').display = 'block';
            document.querySelector('.each_stage_container').style.display = 'none';
        }
        else{
            document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
            document.querySelector('.meta_container').style.display = 'none'; // none 설정 ㅇ
            document.querySelector('.base_stage').style.display = 'block'; // base 다시 on
            document.querySelector('#stage_img').src = `img/stage3_card${stage_num}.png`; //5, 6
        }
    }
};

let stage_4 = () => {
    stage_now = [0,0,0,0,1]; // 마지막에 초기화 시키기
    stage_num++;
    if (stage_num == 1){
        document.querySelector('.main_container').style.display = 'none';
        document.querySelector('.each_stage_container').style.display = 'block';
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.explain_box').style.display = 'block';
        document.querySelector('.text_space').innerHTML = `<h1 style = "color: white;">
            "<br>
            이 마을은 범죄, 사기예방 마을이야..<br>
            <br>
            어.. 뭐지?? 뭐가 날라오는데...???<br>
            <br>
            !!! 일단 피해야해..!!
            <br>
            "</h1>
        `;
    }
    if (stage_num == 2){
        
        document.querySelector('.explain_box').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
        setTimeout(() => {
            document.querySelector('.base_stage').style.display = 'block';
            document.querySelector('#stage_img').style.display = 'inline';
            document.querySelector('#stage_img').src = `img/stageBgfour.png`;
            document.querySelector('.bt_container_2').style.display = 'block';
        }, 2000);
    }

    if (stage_num == 3){
        document.querySelector('#stage_img').src = `img/stage4_card3.png`;
    }

    if (stage_num == 4){
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.base_stage').style.display = 'none' // 나중에 확인
        document.querySelector('.game_container').style.display = 'block';
        
    }

    if (stage_num >= 5){
        if(stage_num == 7){
            clear++;
            check_clear();
            document.querySelector('.main_container').style.display = 'block';
            document.querySelector('#map_door4').src = 'img/t_block.png'; // 이거 당장.
            document.querySelector('#map_door4').onclick = 'console.log(`finish`);';
            document.querySelector('#stage_img').style.display = 'none';
            document.querySelector('.base_stage').style.display = 'none';
            stage_now = [0,0,0,0,0];
            stage_num = 0;
            document.querySelector('.explain_box').display = 'block';
            document.querySelector('.each_stage_container').style.display = 'none';
        }
        else{
            document.querySelector('.game_container').style.display = 'none';
            document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
            document.querySelector('.base_stage').style.display = 'block'; // base 다시 on
            document.querySelector('#stage_img').src = `img/stage4_card${stage_num}.png`; //5, 6
        }
    }
};

let check_stage = () => {
    for (let i = 0; i < stage_now.length; i++){
        if (stage_now[i] == 1){
            if (i==0) stage_0();
            else if (i==1) stage_1();
            else if (i==2) stage_2();
            else if (i==3) stage_3();
            else if (i==4) stage_4();
        }
    }
};

let check_game = () => {
    if (document.querySelector('#game_txt').value == '사기 예방은 업비트 투자자보호센터'){
        window.alert('성공!');
        stage_4();
    }
};

let check_clear = () => {
    if (clear == 5){
        setTimeout(() => {
            document.querySelector('body').style.animationName = 'clear_body';
            document.querySelector('.main_container').style.display = 'none';
            end_story();
        },2000);
    }
};

let end_story = () => {
    end_num++;
    if (end_num == 1){
        document.querySelector('.end_container').style.display = 'block';
        document.querySelector('.end_container').style.border = 'none';
        document.querySelector('.end_container').style.animationName = 'end_page';
        document.querySelector('#end_img').src = `img/end1.png`;
    }
    if ((end_num >= 2) && (end_num <= 11)){
        document.querySelector('#end_img').src = `img/end${end_num}.png`;
    }

    if (end_num == 12){
        document.querySelector('.end_container').style.display = 'none';
        document.querySelector('#finish_logo').style.display = 'inline';
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfb9Ps_h6RQ6wZLC5e6A-OCf3aowxRt_KygKHk0cGX4_lVO-Q/viewform?usp=sf_link');
    }
};

let upbit_open = () => {
    window.location.href = `https://upbit.com/home`;
}