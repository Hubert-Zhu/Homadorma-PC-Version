window.onload = function () {
    var carousel = document.querySelector('.carousel');
    var carouselUl = carousel.querySelector('ul');
    var carouselLis = carouselUl.querySelectorAll('li');
    var points = carousel.querySelector('ol');
    // 屏幕的宽度
    var screenWidth = document.documentElement.offsetWidth;
    var timer = null;

    var clickLeft = document.documentElement.getElementsByClassName("left-click")[0];
    var clickRight = document.documentElement.getElementsByClassName("right-click")[0];
    // 设置 ul 的高度
    carouselUl.style.height = carouselLis[0].offsetHeight + 'px';

    // 初始三个固定的位置
    var left = carouselLis.length - 1;
    var center = 0;
    var right = 1;



    // 归位（多次使用，封装成函数）
    setTransform();

    // 调用定时器
    timer = setInterval(showNext, 5000);


    // 轮播图片切换下一张
    function showNext() {
        // 轮转下标
        left = center;
        center = right;
        right++;
        //　极值判断
        if (right > carouselLis.length - 1) {
            right = 0;
        }
        //添加过渡（多次使用，封装成函数）
        setTransition(1, 1, 0);
        // 归位
        setTransform();
        clearInterval(timer);
    }

    // 轮播图片切换上一张
    function showPrev() {
        // 轮转下标
        right = center;
        center = left;
        left--;
        //　极值判断
        if (left < 0) {
            left = carouselLis.length - 1;
        }
        //添加过渡
        setTransition(0, 1, 1);
        // 归位
        setTransform();
        // 自动设置小圆点
        clearInterval(timer);
    }


    // 设置过渡
    function setTransition(a, b, c) {
        if (a) {
            carouselLis[left].style.transition = 'transform 1s';
        } else {
            carouselLis[left].style.transition = 'none';
        }
        if (b) {
            carouselLis[center].style.transition = 'transform 1s';
        } else {
            carouselLis[center].style.transition = 'none';
        }
        if (c) {
            carouselLis[right].style.transition = 'transform 1s';
        } else {
            carouselLis[right].style.transition = 'none';
        }
    }

    //　封装归位
    function setTransform(dx) {
        dx = dx || 0;
        carouselLis[left].style.transform = 'translateX(' + (-screenWidth + dx) + 'px)';
        carouselLis[center].style.transform = 'translateX(' + dx + 'px)';
        carouselLis[right].style.transform = 'translateX(' + (screenWidth + dx) + 'px)';
    }

    clickRight.addEventListener('click', function () {
        // 轮转下标
        left = center;
        center = right;
        right++;
        //　极值判断
        if (right > carouselLis.length - 1) {
            right = 0;
        }
        //添加过渡（多次使用，封装成函数）
        setTransition(1, 1, 0);
        // 归位
        setTransform();
    });

    clickLeft.addEventListener('click', function () {
        // 轮转下标
        right = center;
        center = left;
        left--;
        //　极值判断
        if (left < 0) {
            left = carouselLis.length - 1;
        }
        //添加过渡
        setTransition(0, 1, 1);
        // 归位
        setTransform();
        // 自动设置小圆点
    });
}
