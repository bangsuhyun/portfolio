// 메뉴 버튼 기능 START
var navCnt = 0;
function navOpen(){
    if( navCnt==0){
        document.getElementsByClassName('main_menu_btn1')[0].style="animation: main_menu_btn1_On 0.4s 0s forwards; border-bottom: 3px solid rgb(245,245,245);";
        document.getElementsByClassName('main_menu_btn2')[0].style="animation: main_menu_btn2_On 0.4s 0s forwards;";
        document.getElementsByClassName('main_menu_btn3')[0].style="animation: main_menu_btn3_On 0.4s 0s forwards; border-bottom: 3px solid rgb(245,245,245);";
        document.getElementById('nav').style="animation: navigation_On 0.4s 0s forwards; display: block;";
        document.querySelector('.nav_inner h1').style="animation: nav_inner_On 0.3s 0.4s forwards;";
        document.querySelector('.nav_inner h1:nth-child(2)').style="animation: nav_inner_On 0.4s 0.4s forwards;";
        document.querySelector('.nav_inner h1:nth-child(3)').style="animation: nav_inner_On 0.4s 0.5s forwards;";
        navCnt ++;
    }
    else{
        document.getElementsByClassName('main_menu_btn1')[0].style="animation: main_menu_btn1_Off 0.4s 0s forwards;";
        document.getElementsByClassName('main_menu_btn2')[0].style="animation: main_menu_btn2_Off 0.4s 0s forwards;";
        document.getElementsByClassName('main_menu_btn3')[0].style="animation: main_menu_btn3_Off 0.4s 0s forwards;";
        document.getElementById('nav').style="animation: navigation_Off 0.4s 0s forwards; display: none;";
        navCnt --;
    }
}
// 메뉴 버튼 기능 END

//메뉴 버튼 이동 기능 START
function GoPortflio(){

}

//스크롤 이벤트
function scrollCheck(){
    var test = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(test);
}



//sub 이미지 오버


// about 슬라이드
var aboutNumber = 0;
var about = document.getElementsByClassName('about_slide');
var aboutFrame = document.getElementsByClassName('about_frame');
var project = document.getElementsByClassName('project_slide')
function moveNext() {
    if (aboutNumber != 7) {
    about[aboutNumber].style = "animation:fade_out_rtl 0.6s forwards"
    about[aboutNumber + 1].style = "animation:fade_in_rtl 0.6s forwards"
    aboutFrame[aboutNumber].style = "animation:frame_width_out 0.8s forwards"
    aboutFrame[aboutNumber + 1].style = "animation:frame_width_in 0.8s forwards"
    project[aboutNumber].style = "animation:fade_out_rtl 0.6s forwards"
    project[aboutNumber + 1].style = "animation:fade_in_rtl 0.6s forwards"
    aboutNumber++;
    } else {
        about[aboutNumber].style = "animation:fade_out_ltr_2 0.6s forwards"
        about[aboutNumber - 1].style = "animation:fade_out_ltr_1 0.6s forwards"
        about[0].style = "animation:fade_out_ltr_0 0.6s forwards"
        aboutFrame[aboutNumber].style = "animation:frame_width_out 0.8s forwards"
        aboutFrame[0].style = "animation:frame_width_in 0.8s forwards"
        project[aboutNumber].style = "animation:fade_out_ltr_2 0.6s forwards"
        project[aboutNumber - 1].style = "animation:fade_out_ltr_1 0.6s forwards"
        project[0].style = "animation:fade_out_ltr_0 0.6s forwards"
        aboutNumber = 0;
    }
}

function movePrev() {
    if (aboutNumber != 0) {
    about[aboutNumber].style = "animation:fade_out_ltr 0.4s forwards";
    about[aboutNumber - 1].style = "animation:fade_in_ltr 0.4s forwards";
    aboutFrame[aboutNumber].style = "animation:frame_width_out 0.8s forwards"
    aboutFrame[aboutNumber - 1].style = "animation:frame_width_in 0.8s forwards"
    project[aboutNumber].style = "animation:fade_out_ltr 0.4s forwards";
    project[aboutNumber - 1].style = "animation:fade_in_ltr 0.4s forwards";
    aboutNumber--;
    } else {
        about[0].style = "animation:fade_in_rtl_0 0.4s forwards";
        about[about.length - 1].style = "animation:fade_in_rtl_2 0.4s forwards";
        aboutFrame[0].style = "animation:frame_width_out 0.8s forwards";
        aboutFrame[about.length - 1].style = "animation:frame_width_in 0.8s forwards";
        project[0].style = "animation:fade_in_rtl_0 0.4s forwards";
        project[about.length - 1].style = "animation:fade_in_rtl_2 0.4s forwards";
        aboutNumber = about.length - 1;
    }
}

// about 버튼 호버상태
var prevBt = document.getElementsByClassName('prev_bt_after');
var nextBt = document.getElementsByClassName('next_bt_after');

function prevOver() {
    for(i=0; i<2; i++){
        prevBt[i].style = "position: absolute; top: calc(50% - 1px); left: 13px; width: 18px; height: 1px; border: 2px solid rgb(255,255,255); border-bottom:none; border-left:none; transform: rotate(0deg);"
    }
}

function prevOut() {
    for(i=0; i<2; i++){
        prevBt[i].style = "position: absolute; left: 10px; width: 12px; height: 12px; border-bottom: 2px solid rgb(255,255,255); border-left: 2px solid rgb(255,255,255); transform: rotate(45deg);"
    }
}

function nextOver() {
    for(i=0; i<2; i++){
        nextBt[i].style = "position: absolute; top: calc(50% - 1px); right:13px; width: 18px; height: 1px; border: 2px solid rgb(255,255,255); border-top:none; border-right:none; transform: rotate(0deg);"
    }
}

function nextOut() {
    for(i=0; i<2; i++){
        nextBt[i].style = "position: absolute; right: 10px; width: 12px; height: 12px; border-top: 2px solid rgb(255,255,255); border-right: 2px solid rgb(255,255,255); transform: rotate(45deg);"
    }
}